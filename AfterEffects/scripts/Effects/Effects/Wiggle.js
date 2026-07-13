//@include "../../Playhead.js"
//@include "../Effect.js"
//@include "../../Element/Element.js"
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
var Wiggle = /** @class */ (function (_super) {
    __extends(Wiggle, _super);
    function Wiggle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Wiggle.prototype.getID = function () {
        return "wiggle";
    };
    Wiggle.prototype.applyHelper = function (element, properties) {
        var wiggleType = "position";
        var dims = [1];
        var amp = 0;
        var freq = 0;
        if (properties.get("wiggleType") != null) {
            wiggleType = properties.get("wiggleType").getValue();
            if (wiggleType == "rotation") {
                dims = [2];
                freq = 5;
                amp = 5;
            }
            else if (wiggleType == "position") {
                amp = 5;
                freq = 5;
            }
        }
        if (properties.get("wiggleDims") != null) {
            var dimsStr = properties.get("wiggleDims").getValue().replace(/ /g, "").split(",");
            for (var i = 0; i < dimsStr.length; i++) {
                if (dimsStr[i] == "x") {
                    dims.push(0);
                }
                else if (dimsStr[i] == "y") {
                    dims.push(1);
                }
                else if (dimsStr[i] == "z") {
                    dims.push(2);
                }
            }
        }
        if (properties.get("wiggleAmp") != null) {
            amp = parseFloat(properties.get("wiggleAmp").getValue());
        }
        if (properties.get("wiggleAmount") != null) {
            amp = parseFloat(properties.get("wiggleAmount").getValue());
        }
        if (properties.get("wiggleFreq") != null) {
            freq = parseFloat(properties.get("wiggleFreq").getValue());
        }
        /*let [layerTop, layerLeft, layerRight, layerBottom] = getLayerPoints(layer, true, startTime);
        let [layerWidth, layerHeight] = [layerRight - layerLeft, layerBottom - layerTop];
        (<Property>layer.property("Anchor Point")).setValue([layerWidth/2, layerHeight, (<Property>layer.property("Anchor Point")).value[2]]);*/
        var props = this.getPropsToBeChanged(element, wiggleType, dims);
        return [props, wiggleType, dims, freq, amp];
    };
    Wiggle.prototype.getPropsToBeChanged = function (element, wiggleType, dims) {
        var props = [];
        if (wiggleType == "position") {
            if (isType(element, Element)) {
                element.getLayer().property("Position").dimensionsSeparated = true;
            }
            else if (isType(element, ElementGroup)) {
                var group = element;
                group.iterate(function (ele) {
                    ele.getLayer().property("Position").dimensionsSeparated = true;
                }, true);
            }
            var _loop_1 = function () {
                var dim = dims[i];
                if (isType(element, Element)) {
                    props.push(element.getLayer().property("Position").getSeparationFollower(dim));
                }
                else if (isType(element, ElementGroup)) {
                    var group = element;
                    group.iterate(function (ele) {
                        props.push(ele.getLayer().property("Position").getSeparationFollower(dim));
                    }, true);
                }
            };
            for (var i = 0; i < dims.length; i++) {
                _loop_1();
            }
        }
        else if (wiggleType == "rotation") {
            var _loop_2 = function () {
                var dim = dims[i];
                var rotDims = ["X", "Y", "Z"];
                if (isType(element, Element)) {
                    props.push(element.getLayer().property(rotDims[dim] + " Rotation"));
                }
                else if (isType(element, ElementGroup)) {
                    var group = element;
                    group.iterate(function (ele) {
                        props.push(ele.getLayer().property(rotDims[dim] + " Rotation"));
                    }, true);
                }
            };
            for (var i = 0; i < dims.length; i++) {
                _loop_2();
            }
        }
        return props;
    };
    Wiggle.prototype.revertChanges = function (element, wiggleType) {
        if (wiggleType == "position") {
            if (isType(element, Element)) {
                element.getLayer().property("Position").dimensionsSeparated = false;
            }
            else if (isType(element, ElementGroup)) {
                var group = element;
                group.iterate(function (ele) {
                    ele.getLayer().property("Position").dimensionsSeparated = false;
                }, true);
            }
        }
        else if (wiggleType == "rotation") {
        }
    };
    Wiggle.prototype.applyElement = function (element, startTime, properties) {
        var layer = element.getLayer();
        var _a = this.applyHelper(element, properties), props = _a[0], wiggleType = _a[1], dims = _a[2], freq = _a[3], amp = _a[4];
        var animationPlayhead = new Playhead(layer.containingComp.frameRate);
        animationPlayhead.moveSeconds(startTime);
        for (var i = 0; i < props.length; i++) {
            var prop = props[i];
            //prop.expression = "wiggle(" + freq + ", " + amp + ");";
            wiggle(layer, prop, freq, amp, animationPlayhead.getCurrentSecond());
        }
        this.revertChanges(element, wiggleType);
        return animationPlayhead.getCurrentSecond() - startTime;
    };
    Wiggle.prototype.applyElementGroup = function (group, startTime, properties) {
        var animationPlayhead = new Playhead(group.getComp().frameRate);
        animationPlayhead.moveSeconds(startTime);
        var _a = getGroupBoundaries(group, true, animationPlayhead.getCurrentSecond()), groupTop = _a[0], groupLeft = _a[1], groupRight = _a[2], groupBottom = _a[3];
        var _b = [groupLeft + ((groupRight - groupLeft) / 2), groupTop + ((groupBottom - groupTop) / 2)], groupXCenter = _b[0], groupYCenter = _b[1];
        var groupDepth = getGroupDepthAverage(group, true, animationPlayhead.getCurrentSecond());
        var elementPlayheadframes = 0;
        var $this = this;
        group.iterate(function (element) {
            var elementPlayhead = new Playhead(animationPlayhead.fps);
            elementPlayhead.moveFrames(animationPlayhead.getCurrentFrame());
            var currentAnchorPointPos = element.getLayer().property("Anchor Point").valueAtTime(animationPlayhead.getCurrentSecond(), true);
            var currentPosition = element.getLayer().property("Position").valueAtTime(animationPlayhead.getCurrentSecond(), true);
            element.getLayer().property("Anchor Point").setValueAtTime(elementPlayhead.getCurrentSecond(), currentAnchorPointPos);
            element.getLayer().property("Position").setValueAtTime(elementPlayhead.getCurrentSecond(), currentPosition);
            elementPlayhead.moveFrames(1);
            var _a = [groupXCenter - currentPosition[0], groupYCenter - currentPosition[1], groupDepth - currentPosition[2]], xChange = _a[0], yChange = _a[1], zChange = _a[2];
            element.getLayer().property("Anchor Point").setValueAtTime(elementPlayhead.getCurrentSecond(), [currentAnchorPointPos[0] + xChange, currentAnchorPointPos[1] + yChange, currentAnchorPointPos[2] + zChange]);
            element.getLayer().property("Position").setValueAtTime(elementPlayhead.getCurrentSecond(), [currentPosition[0] + xChange, currentPosition[1] + yChange, currentPosition[2] + zChange]);
            elementPlayhead.moveSeconds($this.applyElement(element, elementPlayhead.getCurrentSecond(), properties));
            /*(<Property>(<AVLayer>element.getLayer()).property("Anchor Point")).setValueAtTime(elementPlayhead.getCurrentSecond(), [currentAnchorPointPos[0] + xChange, currentAnchorPointPos[1] + yChange, currentAnchorPointPos[2] + zChange]);
            (<Property>(<AVLayer>element.getLayer()).property("Position")).setValueAtTime(elementPlayhead.getCurrentSecond(), [currentPosition[0] + xChange, currentPosition[1] + yChange, currentPosition[2] + zChange]);
            elementPlayhead.moveFrames(1);
            (<Property>(<AVLayer>element.getLayer()).property("Anchor Point")).setValueAtTime(elementPlayhead.getCurrentSecond(), currentAnchorPointPos);
            (<Property>(<AVLayer>element.getLayer()).property("Position")).setValueAtTime(elementPlayhead.getCurrentSecond(), currentPosition);
            elementPlayheadframes = elementPlayhead.getCurrentFrame() - animationPlayhead.getCurrentFrame();*/
        }, true);
        $this = undefined;
        animationPlayhead.moveFrames(elementPlayheadframes);
        return animationPlayhead.getCurrentSecond() - startTime;
    };
    Wiggle.prototype.pauseElement = function (element, time, properties) { };
    Wiggle.prototype.pauseElementGroup = function (element, time, properties) { };
    return Wiggle;
}(Effect));
