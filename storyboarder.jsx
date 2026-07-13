var illustratorScript = File("/D/Video Projects/Automation/AdobeAutomation/Illustrator/scripts/mindmapMain.js");
var aftereffectsScript = File("/D/Video Projects/Automation/AdobeAutomation/AfterEffects/scripts/graphMainWrapper.js");

var storyboarderFile = File().openDlg("Select the storyboarder file", "*.storyboarder", false);

var psdsFolder = Folder(storyboarderFile.parent.toString()+ "/psds/");
var aisFolder = Folder(storyboarderFile.parent.toString()+ "/ais/");

storyboarderFile.open("r");
var storyboarderJSON = JSON.parse(storyboarderFile.read());
var boards = storyboarderJSON.boards;
boards.sort(function(b1, b2){
    return b1.number - b2.number;
});

removeFolderAndContents(psdsFolder);
psdsFolder.create();

removeFolderAndContents(aisFolder);
aisFolder.create();

for (var i =0; i < boards.length; i++) {
    var board = boards[i];
    var boardFile = File(storyboarderFile.parent.toString() + "/images/" + board.link);
    if (board.link) {
        var newPsdFile =  psdsFolder.toString()+ "/" + (i+1) + ".psd";
        var newAiFile =  aisFolder.toString()+ "/" + (i+1) + ".ai";
        bridgeTalkSync("photoshop", "app.open(File(\"" + boardFile.toString() + "\"));app.activeDocument.saveAs(new File(\"" + newPsdFile.toString() +"\"));app.activeDocument.close();");
        bridgeTalkSync("illustrator", "app.open(File(\"" + newPsdFile.toString()+ "\"));\n//@include \"" + illustratorScript.toString() + "\"\napp.activeDocument.saveAs(new File(\"" + newAiFile.toString() +"\"));app.activeDocument.close();");
    }
}
storyboarderFile.close();

eval("//@include \"" + aftereffectsScript.toString() + "\"\ngraphMain(\"" + aisFolder.toString() + "\");app.project.save(File(\"" + storyboarderFile.parent.toString() + "/" + storyboarderFile.displayName.replace(".storyboarder", "") + ".aep\"))");

alert("Collect files and remove 'psds' and 'ais' folders")

//removeFolderAndContents(psdsFolder);

function bridgeTalkSync(target, body, onResultCallback, onErrorCallback) {
    loop = true;
    var bt = new BridgeTalk;
    bt.target = target;
    bt.body = body.toString();
    bt.onResult = function (msg) {
        loop = false;
        if (onResultCallback) {
            onResultCallback(msg);
        }
    };
    bt.onError = function (error) {
        loop = false;
        if (onErrorCallback) {
            onErrorCallback(error);
        } else {
            alert(error.body);
        }
    };
    bt.send();

    while(loop) {
        bt.pump();
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