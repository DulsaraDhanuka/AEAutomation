//@include "./AfterEffects/scripts/json.js"
if (!Array.prototype.indexOf)
  Array.prototype.indexOf = (function(Object, max, min) {
    "use strict"
    return function indexOf(member, fromIndex) {
      if (this === null || this === undefined)
        throw TypeError("Array.prototype.indexOf called on null or undefined")

      var that = Object(this), Len = that.length >>> 0, i = min(fromIndex | 0, Len)
      if (i < 0) i = max(0, Len + i)
      else if (i >= Len) return -1

      if (member === void 0) {        // undefined
        for (; i !== Len; ++i) if (that[i] === void 0 && i in that) return i
      } else if (member !== member) { // NaN
        return -1 // Since NaN !== NaN, it will never be found. Fast-path it.
      } else                          // all else
        for (; i !== Len; ++i) if (that[i] === member) return i

      return -1 // if the value was not found, then return -1
    }
  })(Object, Math.max, Math.min)

progress(100);
function main(isCombined) {
    var photoshopScripts = File(File($.fileName).parent.toString() + "/photoshopUtils.jsx");
    var illustratorScripts = File(File($.fileName).parent.toString() + "/Illustrator/scripts/mindmapMainWrapper.js");
    var aftereffectsScripts = File(File($.fileName).parent.toString() + "/AfterEffects/scripts/graphMainWrapper.js");

    progress.message("Open storyboarder file");
    var storyboarderFile;
    storyboarderFile = File().openDlg("Select the storyboarder file", "*.storyboarder", false);
    progress.increment(1);
    var sceneDirectory = Folder(storyboarderFile.parent.toString() + "/scenes/");
    progress.message("Cleaning existing temp directories");
    removeFolderAndContents(sceneDirectory);
    sceneDirectory.create();
    progress.increment(1);
    var illustratorDirectory = Folder(storyboarderFile.parent.toString() + "/scenes (illustrator)/");
    progress.message("Cleaning existing temp directories");
    removeFolderAndContents(illustratorDirectory);
    illustratorDirectory.create();
    progress.increment(1);
    progress.message("Copying assets");
    var assetsDirectory = Folder(storyboarderFile.parent.toString() + "/assets/");
    copyFolderContents(assetsDirectory, illustratorDirectory);
    progress.increment(1);
    var aftereffectsDirectory = Folder(storyboarderFile.parent.toString() + "/aftereffects/");
    progress.message("Cleaning existing temp directories");
    removeFolderAndContents(aftereffectsDirectory);
    aftereffectsDirectory.create();
    progress.increment(1);

    progress.message("Parsing storyboarder file");
    storyboarderFile.open("r");
    var storyboarderJSON = JSON.parse(storyboarderFile.read());
    storyboarderFile.close();
    progress.increment(1);
    var fps = storyboarderJSON.fps;
    var size = storyboarderJSON.dimensions;
    progress.message("Retrieving boards");
    var shots = groupShots(storyboarderJSON);
    progress.increment(1);

    for (var i = 0; i < shots.length; i++) {
        var shot = shots[i];
        
        progress.message("Creating scene " + (i+1));
        var mainScript = "//@include \"" + photoshopScripts.toString() + "\"\n";
        var subScript = "app.documents.add(" + size[0] + ", " + size[1] + ", 72, \"scene-" + (i+1)+ "\", NewDocumentMode.RGB);";
        var mainGroup = "MAIN [endZoom=\"false\"";
        if (shot[0].duration) {
            mainGroup += ", duration=\"" + shot[0].duration + "\"";
        }
        mainGroup += "]";
        subScript += "makeGroup('" + mainGroup + "');";
        subScript += "app.activeDocument.layers[1].remove();";
        bridgeTalkSync("photoshop", mainScript + subScript);
        progress.increment(30/(storyboarderJSON.boards.length+shots.length));
        for (var ii = 0; ii < shot.length; ii++) {
            progress.message("Adding shot " + (ii+1) + " of scene " + (i+1));
            var board = shot[ii];
            var subScript = "";
            if (ii != 0) {
                subScript += "makeGroup('" + (ii+1);
                if (!board.zoomEnabled) {
                    subScript += " [zoom=\"false\"]";
                }
                subScript += "');";
            }
            
            subScript += "makeGroup('NODE');";
            
            subScript += "var dummyGrp = makeGroup('dummy');";
            subScript += "app.open(File(\"" + storyboarderFile.parent.toString() + "/images/" + board.link + "\"));";
            subScript += "selectAllLayers();";
            subScript += "copySelectedLayers();";
            subScript += "app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);";
            subScript += "pasteLayers();";
            subScript += "dummyGrp.remove();";
            subScript += "selectLayer('" + mainGroup + "');";
        
            bridgeTalkSync("photoshop", mainScript + subScript);
            progress.increment(30/(storyboarderJSON.boards.length+shots.length));
            subScript = "";
        }

        progress.message("Saving scene " + (i+1));
        var subScript = "saveDocument(\"" + sceneDirectory.toString() + "\");";
        subScript += "app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);";
        bridgeTalkSync("photoshop", mainScript + subScript);
        progress.increment(30/(storyboarderJSON.boards.length+shots.length));
    }

    var sceneFiles = sceneDirectory.getFiles();
    var script = "app.userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS;\n//@include \"" + illustratorScripts.toString() + "\"\n";
    for (var i =0; i < sceneFiles.length; i++) {
        progress.message("Creating illustrator files for scene " + (i+1));
        var sceneFile = sceneFiles[i];
        bridgeTalkSync("illustrator", script + "app.open(File(\"" + sceneFile.toString() + "\"));");
        progress.increment(30/(sceneFiles.length*3));
        progress.message("Preparing illustrator files for scene " + (i+1));
        bridgeTalkSync("illustrator", script + "mindmapMain();");
        progress.increment(30/(sceneFiles.length*3));
        progress.message("Saving illustrator files for scene " + (i+1));
        var illustratorFile = illustratorDirectory.toString() + "/" + sceneFile.displayName.replace(".psd", ".ai").replace("scene-", "");
        bridgeTalkSync("illustrator", script + "app.activeDocument.saveAs(File(\"" + illustratorFile + "\"));app.activeDocument.close();");
        progress.increment(30/(sceneFiles.length*3));
        
        if (!isCombined) {
            createAfterEffectsProject(aftereffectsScripts, aftereffectsDirectory, illustratorDirectory, sceneFile.displayName.replace(".psd", ""), 30/sceneFiles.length);
            File(illustratorFile).remove();
        }
    }

    if (isCombined) {
        createAfterEffectsProject(aftereffectsScripts, aftereffectsDirectory, illustratorDirectory, storyboarderFile.displayName.replace(".storyboarder", ""), 30);
    }

    progress.message("Cleaning temp directories")
    removeFolderAndContents(sceneDirectory);
    progress.increment(1);
    progress.message("Cleaning temp directories")
    removeFolderAndContents(illustratorDirectory);
    progress.increment(1);
    progress.message("Cleaning temp directories")
    removeFolderAndContents(aftereffectsDirectory);
    progress.increment(1);
}

function progress(steps) {
    var p;
    var cb;
    var t;
    var w;
    var c;
    w = new Window("palette", "Progress", undefined, {closeButton: false});


    options = w.add("panel", undefined, "Options");
    options.preferredSize = [485, -1];

    c = options.add("checkbox", undefined, "Combined aftereffects project");
    c.alignment = [ScriptUI.Alignment.LEFT, ScriptUI.Alignment.TOP];

    actions = options.add("group");
    actions.orientation = "row";
    cb = actions.add("button", undefined, "Exit");
    cb.onClick = function() {
        w.close();
    }    
    
    b = actions.add("button", undefined, "Run script");
    b.onClick = function() {
        cb.enabled = false;
        //try {
            main(c.value);
        //} catch (e){
            //cb.enabled = true;
            //throw e;
        //}
        cb.enabled = true;
        p.value = 0;
        t.text = "";
    }
    actions.alignment = [ScriptUI.Alignment.RIGHT, ScriptUI.Alignment.BOTTOM]

    status = w.add("panel");

    t = status.add("statictext");
    t.preferredSize = [450, -1]; // 450 pixels wide, default height.

    if (100) {
        p = status.add("progressbar", undefined, 0, 100);
        p.preferredSize = [450, -1]; // 450 pixels wide, default height.
    }

    progress.close = function () {
        w.close();
    };

    progress.increment = function (inc) {
        p.value += inc;
        w.update();
    };

    progress.message = function (message) {
        t.text = message;
        w.update();
    };

    w.show();
}

function createAfterEffectsProject(aftereffectsScripts, aftereffectsDirectory, illustratorDirectory, fileName, progressIncrement) {
    progress.message("Generating AfterEffects project")
    var script = "//@include \"" + aftereffectsScripts.toString() + "\"\n";
    script += "graphMain(Folder(\"" + illustratorDirectory.toString() + "\"));";
    bridgeTalkSync("aftereffects", script);
    progress.increment(progressIncrement / 3);

    progress.message("Saving AfterEffects file")
    script = "app.project.save(File(\"" + aftereffectsDirectory.toString() + "/" + fileName + ".aep\"));";
    bridgeTalkSync("aftereffects", script);
    progress.increment(progressIncrement / 3);

    progress.message("Collect dependency files")
    script = "app.executeCommand(2482);app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);";
    bridgeTalkSync("aftereffects", script);
    progress.increment(progressIncrement / 3);
}

function groupShots(storyboarderJSON) {
    var boards = storyboarderJSON.boards;
    var shots = [];
    
    boards.sort(function(a, b){
        var aid = a.shot.match(/([0-9]+)(.+?)([0-9]*)/);
        var bid = b.shot.match(/([0-9]+)(.+?)([0-9]*)/);

        var asid = parseInt(aid[1]);
        var bsid = parseInt(bid[1]);
        
        if (asid == bsid) {
            var x = parseInt(aid[3]);
            var asid = (x == NaN) ? x : 0;
            x = parseInt(bid[3]);
            var bsid = (x == NaN) ? x : 0;
            
            if (asid == bsid) {
                var chars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
                
                var asid = chars.indexOf(aid[2]);
                var bsid = chars.indexOf(bid[2]);
                
                if (asid == bsid) {
                    return 0;
                }
            }
        }
        
        return asid - bsid;
    });

    for (var i = 0; i < boards.length; i++) {
        var board = boards[i];
        var shotID = board.shot.match(/([0-9]+)(.+?)([0-9]*)/);
        shotID = [parseInt(shotID[1])-1, shotID[2], shotID[3]];
        if (!shots[shotID[0]]) {
            shots[shotID[0]] = [];
        }
        shots[shotID[0]].push(board);
    }

    return shots;
}

function bridgeTalkSync(target, body, onResultCallback, onErrorCallback) {
    loop = true;
    btError = null;
    var bt = new BridgeTalk;
    bt.target = target;
    bt.body = body.toString();
    bt.onResult = function (msg) {
        loop = false;
        if (onResultCallback) {
            onResultCallback(msg);
        }
    };
    bt.onError = function (e) {
        loop = false;
        if (onErrorCallback) {
            onErrorCallback(e);
        } else {
            btError = e;
        }
    };
    bt.send();

    while(loop) {
        bt.pump();
        if (btError != null) {
            alert(btError.body);
        }
    }
}
function removeFolderAndContents(folder) {
    if (folder.exists) {
        var files = folder.getFiles("*");
        for (var i = 0; i < files.length; i++) {
            if (files[i] instanceof Folder) {
                deleteFolderAndContents(files[i]);
            } else {
                files[i].remove();
            }
        }
        folder.remove();
    }
}
function copyFolderContents(sourceDirectory, destinationDirectory) {
    var sourceItems = sourceDirectory.getFiles();
    for (var i =0; i < sourceItems.length; i++) {
        var sourceItem = sourceItems[i];
        
        if (sourceItem instanceof File) {
            sourceItem.copy(destinationDirectory.absoluteURI + "/" + sourceItem.displayName)
        } else if (sourceItem instanceof Folder) {
            newFolder = Folder(destinationDirectory.absoluteURI + "/" + sourceItem.displayName);
            newFolder.create();
            copyFolderContents(sourceItem, newFolder);
        }
    }
}