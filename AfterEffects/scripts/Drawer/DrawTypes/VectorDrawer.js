//@include "../Drawer.js"
//@include "../../utils.js"
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var VectorDrawer = /** @class */ (function (_super) {
    __extends(VectorDrawer, _super);
    function VectorDrawer(drawingHand, erasingHand) {
        var _this = _super.call(this, drawingHand, erasingHand) || this;
        _this.handMoveDuration = 15;
        _this.animationSpeedFac = 100;
        _this.masks = [];
        var maskFolder = Folder(File($.fileName).parent.absoluteURI + "/VectorDrawerMasks/");
        var maskFiles = maskFolder.getFiles(function (f) {
            if (f instanceof Folder) {
                return false;
            }
            return true;
        });
        var projectMasks = app.project.items.addFolder("VECTOR_DRAWER_MASKS");
        for (var i = 0; i < maskFiles.length; i++) {
            var mask = importAsset(maskFiles[i].absoluteURI, ImportAsType.FOOTAGE);
            mask.parentFolder = projectMasks;
            _this.masks.push(mask);
        }
        return _this;
    }
    VectorDrawer.prototype.drawElement = function (element, playhead) {
        ;
    };
    VectorDrawer.prototype.drawGroup = function (group, playhead) {
        var fadeDuration = 30;
        if (group.getProperties().get("fadeDuration")) {
            fadeDuration = parseInt(group.getProperties().get("fadeDuration").getValue());
        }
        var fadeDelay = 0;
        if (group.getProperties().get("fadeDelay")) {
            fadeDelay = parseInt(group.getProperties().get("fadeDelay").getValue());
        }
        var hidePrevious = true;
        if (group.getProperties().get("hidePrevious") && group.getProperties().get("hidePrevious").getValue() == "false") {
            hidePrevious = false;
        }
        var revealType = "mask";
        if (group.getProperties().get("revealType")) {
            revealType = group.getProperties().get("revealType").getValue();
        }
        var sketchLayer = group.get("sketch");
        var vectorLayer = group.get("vector");
        if (sketchLayer != null && vectorLayer != null) {
            var defaultHandPosition = this.drawingHand.property("Position").value;
            if (this.drawingHand.property("Position").numKeys > 0) {
                defaultHandPosition = this.drawingHand.property("Position").valueAtTime(playhead.getCurrentSecond(), true);
            }
            vectorLayer.getComp().openInViewer();
            vectorLayer.getLayer().selected = true;
            app.executeCommand(app.findMenuCommandId("Create Shapes from Vector Layer"));
            vectorLayer.getLayer().selected = false;
            vectorLayer.getLayer().remove();
            vectorLayer.setLayer(vectorLayer.getComp().layer(vectorLayer.getRawName() + " Outlines"));
            vectorLayer.getLayer().name = vectorLayer.getRawName();
            this.drawingHand.property("Position").setValueAtTime(playhead.getCurrentSecond(), defaultHandPosition);
            playhead.moveFrames(this.handMoveDuration);
            var pathShapes = vectorLayer.getLayer().property("Contents");
            for (var i = 0; i < pathShapes.numProperties; i++) {
                var pathShape = pathShapes.property(i + 1);
                pathShape.property("Contents").property("Stroke 1").property("Stroke Width").setValue(10);
                var path = pathShape.property("Contents").property("Path 1").property("Path").value;
                var trimPaths = pathShape.property("Contents").addProperty("ADBE Vector Filter - Trim");
                var pathAnimation = this.drawingHand.containingComp.layers.addNull();
                pathAnimation.threeDLayer = true;
                pathAnimation.inPoint = playhead.getCurrentSecond();
                pathAnimation.containingComp.time = playhead.getCurrentSecond();
                app.executeCommand(2004);
                pathShape.property("Contents").property("Path 1").property("Path").selected = true;
                app.executeCommand(19);
                app.executeCommand(2004);
                pathAnimation.property("Position").selected = true;
                app.executeCommand(20);
                var startKeyframe = pathAnimation.property("Position").nearestKeyIndex(playhead.getCurrentSecond());
                var endKeyframe = pathAnimation.property("Position").numKeys;
                var startKeyframeTime = pathAnimation.property("Position").keyTime(startKeyframe);
                var endKeyframeTime = pathAnimation.property("Position").keyTime(endKeyframe);
                var offset = [pathVertexPositionToAbsolutePosition(path.vertices[0], vectorLayer.getLayer(), playhead.getCurrentSecond(), pathShape)[0] - pathAnimation.property("Position").keyValue(startKeyframe)[0], pathVertexPositionToAbsolutePosition(path.vertices[0], vectorLayer.getLayer(), playhead.getCurrentSecond(), pathShape)[1] - pathAnimation.property("Position").keyValue(startKeyframe)[1]];
                pathAnimation.property("Position").expression = "[transform.position[0] + " + offset[0] + ", transform.position[1] + " + offset[1] + ", thisComp.layer('" + sketchLayer.getLayer().name + "').transform.position[2]];";
                pathAnimation.outPoint = endKeyframeTime;
                var oldInPoint = pathAnimation.inPoint;
                pathAnimation.stretch = 100;
                pathAnimation.startTime = oldInPoint - pathAnimation.inPoint;
                var pathAnimationStart = pathAnimation.inPoint;
                var pathAnimationEnd = pathAnimation.outPoint;
                trimPaths.property("End").setValueAtTime(playhead.getCurrentSecond(), 0);
                this.drawingHand.property("Position").setValueAtTime(playhead.getCurrentSecond(), pathAnimation.property("Position").valueAtTime(pathAnimationStart, false));
                playhead.moveSeconds(pathAnimationEnd - pathAnimationStart);
                this.drawingHand.property("Position").setValueAtTime(playhead.getCurrentSecond(), pathAnimation.property("Position").valueAtTime(pathAnimationEnd, false));
                trimPaths.property("End").setValueAtTime(pathAnimationEnd, 100);
                playhead.moveFrames(this.handMoveDuration);
                if (this.drawingHand.property("Position").expression == "") {
                    this.drawingHand.property("Position").expression = "transform.position;";
                }
                this.drawingHand.property("Position").expression = "if(time >= " + pathAnimationStart + " && time <= " + pathAnimationEnd + ") { comp(\"" + pathAnimation.containingComp.name + "\").layer(\"" + pathAnimation.name + "\").transform.position;} else {" + this.drawingHand.property("Position").expression + "}";
                pathAnimation.locked = true;
            }
            this.drawingHand.property("Position").setValueAtTime(playhead.getCurrentSecond(), defaultHandPosition);
            sketchLayer.getLayer().moveAfter(vectorLayer.getLayer());
            sketchLayer.getLayer().trackMatteType = TrackMatteType.ALPHA;
        }
        var colorElements = [];
        for (var i = 0; i < group.length; i++) {
            if (group.get(i).getName().search(/color_[0-9]+/) != -1) {
                colorElements.push(group.get(i));
            }
        }
        colorElements.sort(function (a, b) {
            var aIndex = parseInt(a.getName().replace("color_", ""));
            var bIndex = parseInt(b.getName().replace("color_", ""));
            return aIndex - bIndex;
        });
        this.revealColorLayers(colorElements, playhead, fadeDelay, fadeDuration, revealType, hidePrevious);
    };
    VectorDrawer.prototype.revealColorLayers = function (colorElements, playhead, fadeDelay, fadeDuration, revealType, hidePrevious) {
        for (var i = 0; i < colorElements.length; i++) {
            if (i != 0) {
                playhead.moveFrames(fadeDelay);
            }
            if (isType(colorElements[i], Element)) {
                colorElements[i].getLayer().property("Opacity").setValueAtTime(playhead.getCurrentSecond(), 0);
                if (revealType == "mask") {
                    playhead.moveFrames(1);
                }
                else {
                    playhead.moveFrames(fadeDuration);
                }
                if (i > 0 && hidePrevious && revealType != "mask") {
                    playhead.moveFrames(-1);
                    colorElements[i - 1].getLayer().property("Opacity").setValueAtTime(playhead.getCurrentSecond(), 100);
                    playhead.moveFrames(1);
                    colorElements[i - 1].getLayer().property("Opacity").setValueAtTime(playhead.getCurrentSecond(), 0);
                }
                colorElements[i].getLayer().property("Opacity").setValueAtTime(playhead.getCurrentSecond(), 100);
                if (revealType == "mask") {
                    var maskLayer = colorElements[i].getComp().layers.add(this.masks[Math.floor(Math.random() * this.masks.length)]);
                    maskLayer.threeDLayer = true;
                    maskLayer.moveBefore(colorElements[i].getLayer());
                    maskLayer.startTime = playhead.getCurrentSecond();
                    playhead.moveSeconds(maskLayer.outPoint - maskLayer.inPoint);
                    colorElements[i].getLayer().trackMatteType = TrackMatteType.LUMA_INVERTED;
                    playhead.moveFrames(-1);
                    maskLayer.property("Position").expression = "comp(\"" + colorElements[i].getLayer().containingComp.name + "\").layer(\"" + colorElements[i].getLayer().name.replace(/\"/g, '\\"') + "\").transform.position";
                    var colorLayerPosition = getLayerPoints(colorElements[i].getLayer(), true, 0);
                    var colorLayerSize = [colorLayerPosition[1] - colorLayerPosition[2], colorLayerPosition[3] - colorLayerPosition[0]];
                    //let maskPosition: [number, number, number, number] = getLayerPoints(maskLayer, true, 0);
                    //let maskSize: [number, number] = [maskPosition[1] - maskPosition[2], maskPosition[3] - maskPosition[0]];
                    var maskSize = [maskLayer.source.width, maskLayer.source.height];
                    maskLayer.property("Scale").setValue([colorLayerSize[0] / maskSize[0] * 100, colorLayerSize[1] / maskSize[1] * 100, 100]);
                    if (i > 0 && hidePrevious) {
                        colorElements[i - 1].getLayer().property("Opacity").setValueAtTime(playhead.getCurrentSecond(), 100);
                        playhead.moveFrames(1);
                        colorElements[i - 1].getLayer().property("Opacity").setValueAtTime(playhead.getCurrentSecond(), 0);
                    }
                }
            }
            else if (isType(colorElements[i], ElementGroup)) {
                var innerColorLayers = [];
                for (var ii = 0; ii < colorElements[i].length; ii++) {
                    innerColorLayers.push(colorElements[i].get(ii));
                }
                innerColorLayers.sort(function (a, b) {
                    var aIndex = parseInt(a.getName());
                    var bIndex = parseInt(b.getName());
                    return aIndex - bIndex;
                });
                this.revealColorLayers(innerColorLayers, playhead, fadeDelay, fadeDuration, revealType, hidePrevious);
            }
        }
    };
    VectorDrawer.prototype.eraseElement = function (element, playhead) {
        ;
    };
    VectorDrawer.prototype.eraseGroup = function (group, playhead) {
    };
    VectorDrawer.prototype.condition = function (element, containerSize) {
        if (isType(element, ElementGroup)) {
            if (element.get("sketch") != null && element.get("vector") != null) {
                return true;
            }
        }
        return false;
    };
    VectorDrawer.prototype.getID = function () {
        return "sketcher";
    };
    return VectorDrawer;
}(Drawer));
