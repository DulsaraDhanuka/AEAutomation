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
// TODO: Make redrawable
var GridDrawer = /** @class */ (function (_super) {
    __extends(GridDrawer, _super);
    function GridDrawer(drawingHand, erasingHand) {
        var _this = _super.call(this, drawingHand, erasingHand) || this;
        _this.handMoveDuration = 2;
        _this.handPointDelay = 1;
        _this.handPointMoveDelay = 1;
        _this.groupElementDelay = 3;
        return _this;
    }
    GridDrawer.prototype.drawElement = function (element, playhead) {
        var elementComp = element.getComp();
        var layer = element.getLayer();
        var _a = getLayerPoints(layer, false), top = _a[0], left = _a[1], right = _a[2], bottom = _a[3];
        var _b = [right - left, bottom - top], width = _b[0], height = _b[1];
        var matte = null;
        var maskGrid = new Array();
        var xn = 5;
        var yn = 5;
        var xs = Math.floor(width / xn);
        var ys = Math.floor(height / yn);
        var f = false;
        var randomize = true;
        if (width >= height * 3) {
            f = false;
        }
        else {
            f = true;
            xn = 10;
            yn = 2;
        }
        if (element.getProperties().get("gridX") != null) {
            xn = parseInt(element.getProperties().get("gridX").getValue());
        }
        if (element.getProperties().get("gridY") != null) {
            yn = parseInt(element.getProperties().get("gridY").getValue());
        }
        if (element.getProperties().get("direction") != null) {
            var direction = element.getProperties().get("direction").getValue();
            if (direction == "x") {
                f = true;
            }
            else if (direction == "y") {
                f = false;
            }
        }
        if (element.getProperties().get("shuffle") != null) {
            var shuffleProp = element.getProperties().get("shuffle").getValue();
            if (shuffleProp == "true") {
                randomize = true;
            }
            else {
                randomize = false;
            }
        }
        var matteFolder = createFolder(this.getID() + "_MATTES");
        matte = elementComp.layers.addSolid([255, 255, 255], layer.name + "_" + this.getID() + "_MATTE", Math.floor(right - left), Math.floor(bottom - top), 1, elementComp.duration);
        matte.threeDLayer = layer.threeDLayer;
        matte.source.parentFolder = matteFolder;
        matte.moveBefore(layer);
        layer.trackMatteType = TrackMatteType.ALPHA;
        matte.quality = LayerQuality.DRAFT;
        matte.enabled = false;
        parentToLayer(layer, matte);
        matte.property("Position").setValue([width / 2, height / 2]);
        //(<Property>matte.property("Anchor Point")).setValue([0, 0, 0]);
        if (f) {
            for (var i = 0; i < yn; i++) {
                var column = new Array();
                for (var ii = 0; ii < xn; ii++) {
                    var newMask = matte.mask.addProperty("Mask");
                    var myMaskShape = newMask.property("maskShape");
                    var v = this.createShape(width / xn * ii, height / yn * i, width / xn, height / yn);
                    myMaskShape.setValue(v[0]);
                    column.push([matte.mask.numProperties, v[1]]);
                }
                if (randomize) {
                    column = shuffle(column);
                }
                maskGrid.push(column);
            }
        }
        else {
            for (var i = 0; i < xn; i++) {
                var column = new Array();
                for (var ii = 0; ii < yn; ii++) {
                    var newMask = matte.mask.addProperty("Mask");
                    var myMaskShape = newMask.property("maskShape");
                    var v = this.createShape((width / xn * i), height / yn * ii, width / xn, height / yn);
                    myMaskShape.setValue(v[0]);
                    column.push([matte.mask.numProperties, v[1]]);
                }
                if (randomize) {
                    column = shuffle(column);
                }
                maskGrid.push(column);
            }
        }
        var masks = [].concat.apply([], maskGrid);
        var defaultHandPosition = this.drawingHand.property("Position").valueAtTime(playhead.getCurrentSecond(), true);
        this.drawingHand.property("Position").setValueAtTime(playhead.getCurrentSecond(), defaultHandPosition);
        this.drawingHand.property("Position").setSpatialTangentsAtKey(this.drawingHand.property("Position").numKeys, [0, 0, 0], [0, 0, 0]);
        playhead.moveFrames(this.handMoveDuration);
        for (var i = 0; i < masks.length; i++) {
            var mask = matte.mask.property(masks[i][0]);
            var mShape = mask.property("maskShape").value;
            mask.property("Mask Opacity").setValueAtTime(playhead.getCurrentSecond(), 0);
            for (var ii = 0; ii < masks[i][1].length; ii++) {
                if (ii != 0) {
                    playhead.moveFrames(this.handPointDelay);
                }
                this.drawingHand.property("Position").setValueAtTime(playhead.getCurrentSecond(), pathVertexPositionToAbsolutePosition(masks[i][1][ii], matte, playhead.getCurrentSecond()));
                this.drawingHand.property("Position").setSpatialTangentsAtKey(this.drawingHand.property("Position").numKeys, [0, 0, 0], [0, 0, 0]);
            }
            mask.property("Mask Opacity").setValueAtTime(playhead.getCurrentSecond(), 100);
            playhead.moveFrames(this.handPointMoveDelay);
        }
        playhead.moveFrames(this.handMoveDuration);
        this.drawingHand.property("Position").setValueAtTime(playhead.getCurrentSecond(), defaultHandPosition);
        this.drawingHand.property("Position").setSpatialTangentsAtKey(this.drawingHand.property("Position").numKeys, [0, 0, 0], [0, 0, 0]);
    };
    GridDrawer.prototype.drawGroup = function (group, playhead) {
        group.sort(function (a, b) {
            var a_int = parseInt(a.getName());
            var b_int = parseInt(b.getName());
            if (a_int > b_int) {
                return 1;
            }
            else if (a_int < b_int) {
                return -1;
            }
            else {
                return 0;
            }
        });
        var defaultHandPosition = this.drawingHand.property("Position").valueAtTime(playhead.getCurrentSecond(), true);
        this.drawingHand.property("Position").setValueAtTime(playhead.getCurrentSecond(), defaultHandPosition);
        this.drawingHand.property("Position").setSpatialTangentsAtKey(this.drawingHand.property("Position").numKeys, [0, 0, 0], [0, 0, 0]);
        playhead.moveFrames(this.handMoveDuration);
        var index = 0;
        for (var i = 0; i < group.length; i++) {
            var element = group.get(i);
            if (isType(element, Element)) {
                if (index != 0) {
                    playhead.moveFrames(this.handPointDelay);
                }
                var _a = getLayerPoints(element.getLayer(), true, playhead.getCurrentSecond()), top = _a[0], left = _a[1], right = _a[2], bottom = _a[3];
                var _b = [right - left, bottom - top], width = _b[0], height = _b[1];
                this.drawingHand.property("Position").setValueAtTime(playhead.getCurrentSecond(), [left + (width / 2), top]);
                this.drawingHand.property("Position").setSpatialTangentsAtKey(this.drawingHand.property("Position").numKeys, [0, 0, 0], [0, 0, 0]);
                element.getLayer().property("Opacity").setValueAtTime(playhead.getCurrentSecond(), 0);
                playhead.moveFrames(this.handMoveDuration);
                element.getLayer().property("Opacity").setValueAtTime(playhead.getCurrentSecond(), 100);
                this.drawingHand.property("Position").setValueAtTime(playhead.getCurrentSecond(), [left + (width / 2), bottom]);
                this.drawingHand.property("Position").setSpatialTangentsAtKey(this.drawingHand.property("Position").numKeys, [0, 0, 0], [0, 0, 0]);
                index++;
            }
        }
        playhead.moveFrames(this.handMoveDuration);
        this.drawingHand.property("Position").setValueAtTime(playhead.getCurrentSecond(), defaultHandPosition);
        this.drawingHand.property("Position").setSpatialTangentsAtKey(this.drawingHand.property("Position").numKeys, [0, 0, 0], [0, 0, 0]);
    };
    GridDrawer.prototype.firstElement = function (group) {
        if (isType(group.get(0), ElementGroup)) {
            return this.firstElement(group.get(0));
        }
        else {
            return group.get(0);
        }
    };
    GridDrawer.prototype.eraseElement = function (element, playhead) {
        var elementComp = element.getComp();
        var layer = element.getLayer();
        var _a = getLayerPoints(layer, false), top = _a[0], left = _a[1], right = _a[2], bottom = _a[3];
        var _b = [right - left, bottom - top], width = _b[0], height = _b[1];
        var matte = null;
        var maskGrid = new Array();
        var xn = 5;
        var yn = 5;
        var xs = Math.floor(width / xn);
        var ys = Math.floor(height / yn);
        var f = false;
        if (width >= height * 3) {
            f = false;
        }
        else {
            f = true;
        }
        if (elementComp.layer(layer.name + "_" + this.getID() + "_MATTE") == null) {
            var matteFolder = createFolder(this.getID() + "_MATTES");
            matte = elementComp.layers.addSolid([255, 255, 255], layer.name + "_" + this.getID() + "_MATTE", Math.floor(right - left), Math.floor(bottom - top), 1, elementComp.duration);
            matte.threeDLayer = layer.threeDLayer;
            matte.source.parentFolder = matteFolder;
            matte.moveBefore(layer);
            layer.trackMatteType = TrackMatteType.ALPHA;
            matte.quality = LayerQuality.DRAFT;
            matte.enabled = false;
            parentToLayer(layer, matte);
            matte.property("Position").setValue([0, 0, 0]);
            matte.property("Anchor Point").setValue([0, 0, 0]);
            if (f) {
                for (var i = 0; i < yn; i++) {
                    var column = new Array();
                    for (var ii = 0; ii < xn; ii++) {
                        var newMask = matte.mask.addProperty("Mask");
                        var myMaskShape = newMask.property("maskShape");
                        var v = this.createShape(width / xn * ii, height / yn * i, width / xn, height / yn);
                        myMaskShape.setValue(v[0]);
                        column.push([matte.mask.numProperties, v[1]]);
                    }
                    column = shuffle(column);
                    maskGrid.push(column);
                }
            }
            else {
                for (var i = 0; i < xn; i++) {
                    var column = new Array();
                    for (var ii = 0; ii < yn; ii++) {
                        var newMask = matte.mask.addProperty("Mask");
                        var myMaskShape = newMask.property("maskShape");
                        var v = this.createShape(width / xn * i, height / yn * ii, width / xn, height / yn);
                        myMaskShape.setValue(v[0]);
                        column.push([matte.mask.numProperties, v[1]]);
                    }
                    column = shuffle(column);
                    maskGrid.push(column);
                }
            }
        }
        else {
            matte = elementComp.layer(layer.name + "_" + this.getID() + "_MATTE");
            var index = 1;
            if (f) {
                for (var i = 0; i < yn; i++) {
                    var column = new Array();
                    for (var ii = 0; ii < xn; ii++) {
                        var v = this.createShape(width / xn * ii, height / yn * i, width / xn, height / yn);
                        column.push([index, v[1]]);
                        index++;
                    }
                    column = shuffle(column);
                    maskGrid.push(column);
                }
            }
            else {
                for (var i = 0; i < xn; i++) {
                    var column = new Array();
                    for (var ii = 0; ii < yn; ii++) {
                        var v = this.createShape(width / xn * i, height / yn * ii, width / xn, height / yn);
                        column.push([index, v[1]]);
                        index++;
                    }
                    column = shuffle(column);
                    maskGrid.push(column);
                }
            }
        }
        var masks = [].concat.apply([], maskGrid);
        var defaultHandPosition = this.erasingHand.property("Position").valueAtTime(playhead.getCurrentSecond(), true);
        this.erasingHand.property("Position").setValueAtTime(playhead.getCurrentSecond(), defaultHandPosition);
        this.erasingHand.property("Position").setSpatialTangentsAtKey(this.erasingHand.property("Position").numKeys, [0, 0, 0], [0, 0, 0]);
        playhead.moveFrames(this.handMoveDuration);
        for (var i = 0; i < masks.length; i++) {
            var mask = matte.mask.property(masks[i][0]);
            var mShape = mask.property("maskShape").value;
            mask.property("Mask Opacity").setValueAtTime(playhead.getCurrentSecond(), 100);
            for (var ii = 0; ii < masks[i][1].length; ii++) {
                if (ii != 0) {
                    playhead.moveFrames(this.handPointDelay);
                }
                this.erasingHand.property("Position").setValueAtTime(playhead.getCurrentSecond(), pathVertexPositionToAbsolutePosition(masks[i][1][ii], matte, playhead.getCurrentSecond()));
                this.erasingHand.property("Position").setSpatialTangentsAtKey(this.erasingHand.property("Position").numKeys, [0, 0, 0], [0, 0, 0]);
            }
            mask.property("Mask Opacity").setValueAtTime(playhead.getCurrentSecond(), 0);
            playhead.moveFrames(this.handPointMoveDelay);
        }
        playhead.moveFrames(this.handMoveDuration);
        this.erasingHand.property("Position").setValueAtTime(playhead.getCurrentSecond(), defaultHandPosition);
        this.erasingHand.property("Position").setSpatialTangentsAtKey(this.erasingHand.property("Position").numKeys, [0, 0, 0], [0, 0, 0]);
    };
    GridDrawer.prototype.eraseGroup = function (group, playhead) {
        group.sort(function (a, b) {
            var a_int = parseInt(a.getName());
            var b_int = parseInt(b.getName());
            if (a_int > b_int) {
                return 1;
            }
            else if (a_int < b_int) {
                return -1;
            }
            else {
                return 0;
            }
        });
        var defaultHandPosition = this.erasingHand.property("Position").valueAtTime(playhead.getCurrentSecond(), true);
        this.erasingHand.property("Position").setValueAtTime(playhead.getCurrentSecond(), defaultHandPosition);
        this.erasingHand.property("Position").setSpatialTangentsAtKey(this.erasingHand.property("Position").numKeys, [0, 0, 0], [0, 0, 0]);
        playhead.moveFrames(this.handMoveDuration);
        var index = 0;
        for (var i = 0; i < group.length; i++) {
            var element = group.get(i);
            if (isType(element, Element)) {
                if (index != 0) {
                    playhead.moveFrames(this.handPointDelay);
                }
                var _a = getLayerPoints(element.getLayer(), true, playhead.getCurrentSecond()), top = _a[0], left = _a[1], right = _a[2], bottom = _a[3];
                var _b = [right - left, bottom - top], width = _b[0], height = _b[1];
                this.erasingHand.property("Position").setValueAtTime(playhead.getCurrentSecond(), [left + (width / 2), top]);
                this.erasingHand.property("Position").setSpatialTangentsAtKey(this.erasingHand.property("Position").numKeys, [0, 0, 0], [0, 0, 0]);
                element.getLayer().property("Opacity").setValueAtTime(playhead.getCurrentSecond(), 100);
                playhead.moveFrames(this.handMoveDuration);
                element.getLayer().property("Opacity").setValueAtTime(playhead.getCurrentSecond(), 0);
                this.erasingHand.property("Position").setValueAtTime(playhead.getCurrentSecond(), [left + (height / 2), bottom]);
                this.erasingHand.property("Position").setSpatialTangentsAtKey(this.erasingHand.property("Position").numKeys, [0, 0, 0], [0, 0, 0]);
                index++;
            }
        }
        playhead.moveFrames(this.handMoveDuration);
        this.erasingHand.property("Position").setValueAtTime(playhead.getCurrentSecond(), defaultHandPosition);
        this.erasingHand.property("Position").setSpatialTangentsAtKey(this.erasingHand.property("Position").numKeys, [0, 0, 0], [0, 0, 0]);
    };
    GridDrawer.prototype.condition = function (element, containerSize) {
        return true;
    };
    GridDrawer.prototype.createShape = function (left, top, width, height) {
        var shape = new Shape();
        shape.vertices = [[left, top], [left + width, top], [left + width, top + height], [left, top + height]];
        shape.inTangents = [[0, 0], [0, 0], [0, 0], [0, 0]];
        shape.outTangents = [[0, 0], [0, 0], [0, 0], [0, 0]];
        var points = new Array();
        points.push([left + (width / 2), top]);
        points.push([left + (width / 2), top + height]);
        return [shape, points];
    };
    GridDrawer.prototype.getID = function () {
        return "grider";
    };
    return GridDrawer;
}(Drawer));
