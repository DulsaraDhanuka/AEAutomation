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
var Pusher = /** @class */ (function (_super) {
    __extends(Pusher, _super);
    function Pusher(hands) {
        var _this = _super.call(this, hands[0], hands[0]) || this;
        _this.handMoveDuration = 35;
        _this.handDelay = 9;
        _this.BTT_hand = null;
        _this.TTB_hand = null;
        _this.LTR_hand = null;
        _this.RTL_hand = null;
        _this.BTT_hand = hands[0];
        _this.TTB_hand = hands[1];
        _this.LTR_hand = hands[2];
        _this.RTL_hand = hands[3];
        return _this;
    }
    Pusher.prototype.drawElement = function (element, playhead) {
        var _a = this.validateOptions(element), hand = _a[0], direction = _a[1];
        var handLayer = this.BTT_hand;
        switch (direction) {
            case 'ltr':
                handLayer = this.LTR_hand;
                break;
            case 'rtl':
                handLayer = this.RTL_hand;
                break;
            case 'btt':
                handLayer = this.BTT_hand;
                break;
            case 'ttb':
                handLayer = this.TTB_hand;
                break;
            default:
                handLayer = this.BTT_hand;
                break;
        }
        var currentLayerPos = [0, 0, 0];
        var elementPoints = getLayerPoints(element.getLayer(), true, playhead.getCurrentSecond());
        currentLayerPos[0] = elementPoints[1] + ((elementPoints[2] - elementPoints[1]) / 2);
        currentLayerPos[1] = elementPoints[0] + ((elementPoints[3] - elementPoints[0]) / 2);
        currentLayerPos[2] = element.getLayer().property("Position").valueAtTime(playhead.getCurrentSecond(), true)[2];
        var defaultHandPos = [0, 0];
        var drawingHandPoints = getLayerPoints(handLayer, true, playhead.getCurrentSecond());
        defaultHandPos[0] = drawingHandPoints[1] + ((drawingHandPoints[2] - drawingHandPoints[1]) / 2);
        defaultHandPos[1] = drawingHandPoints[0] + ((drawingHandPoints[3] - drawingHandPoints[0]) / 2);
        var restingPos = [0, 0, 0];
        switch (direction) {
            case 'ltr':
                restingPos = [defaultHandPos[0], currentLayerPos[1], currentLayerPos[2]];
                break;
            case 'rtl':
                restingPos = [defaultHandPos[0], currentLayerPos[1], currentLayerPos[2]];
                break;
            case 'btt':
                restingPos = [currentLayerPos[0], defaultHandPos[1], currentLayerPos[2]];
                break;
            case 'ttb':
                restingPos = [currentLayerPos[0], defaultHandPos[1], currentLayerPos[2]];
                break;
            default:
                restingPos = [defaultHandPos[0], currentLayerPos[1], currentLayerPos[2]];
                break;
        }
        if (hand === true) {
            handLayer.property("Position").setValueAtTime(playhead.getCurrentSecond(), defaultHandPos);
            handLayer.property("Position").setInterpolationTypeAtKey(handLayer.property("Position").numKeys, KeyframeInterpolationType.LINEAR, KeyframeInterpolationType.LINEAR);
            handLayer.property("Position").setSpatialTangentsAtKey(handLayer.property("Position").numKeys, [0, 0, 0], [0, 0, 0]);
            playhead.moveFrames(1);
            handLayer.property("Position").setValueAtTime(playhead.getCurrentSecond(), restingPos);
            handLayer.property("Position").setInterpolationTypeAtKey(handLayer.property("Position").numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
            handLayer.property("Position").setTemporalEaseAtKey(handLayer.property("Position").numKeys, [new KeyframeEase(0, 100 / 3)], [new KeyframeEase(0, 100 / 3)]);
            handLayer.property("Position").setSpatialTangentsAtKey(handLayer.property("Position").numKeys, [0, 0, 0], [0, 0, 0]);
        }
        element.getLayer().property("Position").setValueAtTime(playhead.getCurrentSecond(), restingPos);
        element.getLayer().property("Position").setInterpolationTypeAtKey(element.getLayer().property("Position").numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
        element.getLayer().property("Position").setTemporalEaseAtKey(element.getLayer().property("Position").numKeys, [new KeyframeEase(0, 100 / 3)], [new KeyframeEase(0, 100 / 3)]);
        element.getLayer().property("Position").setSpatialTangentsAtKey(element.getLayer().property("Position").numKeys, [0, 0, 0], [0, 0, 0]);
        playhead.moveFrames(this.handMoveDuration);
        if (hand === true) {
            handLayer.property("Position").setValueAtTime(playhead.getCurrentSecond(), currentLayerPos);
            handLayer.property("Position").setInterpolationTypeAtKey(handLayer.property("Position").numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
            handLayer.property("Position").setTemporalEaseAtKey(handLayer.property("Position").numKeys, [new KeyframeEase(0, 100 / 3)], [new KeyframeEase(0, 100 / 3)]);
            handLayer.property("Position").setSpatialTangentsAtKey(handLayer.property("Position").numKeys, [0, 0, 0], [0, 0, 0]);
        }
        element.getLayer().property("Position").setValueAtTime(playhead.getCurrentSecond(), currentLayerPos);
        element.getLayer().property("Position").setInterpolationTypeAtKey(element.getLayer().property("Position").numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
        element.getLayer().property("Position").setTemporalEaseAtKey(element.getLayer().property("Position").numKeys, [new KeyframeEase(0, 100 / 3)], [new KeyframeEase(0, 100 / 3)]);
        element.getLayer().property("Position").setSpatialTangentsAtKey(element.getLayer().property("Position").numKeys, [0, 0, 0], [0, 0, 0]);
        playhead.moveFrames(this.handDelay);
        if (hand === true) {
            handLayer.property("Position").setValueAtTime(playhead.getCurrentSecond(), currentLayerPos);
            handLayer.property("Position").setInterpolationTypeAtKey(handLayer.property("Position").numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
            handLayer.property("Position").setTemporalEaseAtKey(handLayer.property("Position").numKeys, [new KeyframeEase(0, 100 / 3)], [new KeyframeEase(0, 100 / 3)]);
            handLayer.property("Position").setSpatialTangentsAtKey(handLayer.property("Position").numKeys, [0, 0, 0], [0, 0, 0]);
        }
        element.getLayer().property("Position").setValueAtTime(playhead.getCurrentSecond(), currentLayerPos);
        playhead.moveFrames(this.handMoveDuration);
        if (hand === true) {
            handLayer.property("Position").setValueAtTime(playhead.getCurrentSecond(), restingPos);
            handLayer.property("Position").setInterpolationTypeAtKey(handLayer.property("Position").numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
            handLayer.property("Position").setTemporalEaseAtKey(handLayer.property("Position").numKeys, [new KeyframeEase(0, 100 / 3)], [new KeyframeEase(0, 100 / 3)]);
            handLayer.property("Position").setSpatialTangentsAtKey(handLayer.property("Position").numKeys, [0, 0, 0], [0, 0, 0]);
            playhead.moveFrames(1);
            handLayer.property("Position").setValueAtTime(playhead.getCurrentSecond(), defaultHandPos);
            handLayer.property("Position").setInterpolationTypeAtKey(handLayer.property("Position").numKeys, KeyframeInterpolationType.LINEAR, KeyframeInterpolationType.LINEAR);
            handLayer.property("Position").setSpatialTangentsAtKey(handLayer.property("Position").numKeys, [0, 0, 0], [0, 0, 0]);
        }
        else {
            playhead.moveFrames(1);
        }
    };
    Pusher.prototype.eraseElement = function (element, playhead) {
        var _a = this.validateOptions(element), hand = _a[0], direction = _a[1];
        var handLayer = this.BTT_hand;
        switch (direction) {
            case 'ltr':
                handLayer = this.LTR_hand;
                break;
            case 'rtl':
                handLayer = this.RTL_hand;
                break;
            case 'btt':
                handLayer = this.BTT_hand;
                break;
            case 'ttb':
                handLayer = this.TTB_hand;
                break;
            default:
                handLayer = this.BTT_hand;
                break;
        }
        var currentLayerPos = [0, 0, 0];
        var elementPoints = getLayerPoints(element.getLayer(), true, playhead.getCurrentSecond());
        currentLayerPos[0] = elementPoints[1] + ((elementPoints[2] - elementPoints[1]) / 2);
        currentLayerPos[1] = elementPoints[0] + ((elementPoints[3] - elementPoints[0]) / 2);
        currentLayerPos[2] = element.getLayer().property("Position").valueAtTime(playhead.getCurrentSecond(), true)[2];
        var defaultHandPos = [0, 0];
        var drawingHandPoints = getLayerPoints(handLayer, true, playhead.getCurrentSecond());
        defaultHandPos[0] = drawingHandPoints[1] + ((drawingHandPoints[2] - drawingHandPoints[1]) / 2);
        defaultHandPos[1] = drawingHandPoints[0] + ((drawingHandPoints[3] - drawingHandPoints[0]) / 2);
        var restingPos = [0, 0, 0];
        switch (direction) {
            case 'ltr':
                restingPos = [defaultHandPos[0], currentLayerPos[1], currentLayerPos[2]];
                break;
            case 'rtl':
                restingPos = [defaultHandPos[0], currentLayerPos[1], currentLayerPos[2]];
                break;
            case 'btt':
                restingPos = [currentLayerPos[0], defaultHandPos[1], currentLayerPos[2]];
                break;
            case 'ttb':
                restingPos = [currentLayerPos[0], defaultHandPos[1], currentLayerPos[2]];
                break;
            default:
                restingPos = [defaultHandPos[0], currentLayerPos[1], currentLayerPos[2]];
                break;
        }
        if (hand === true) {
            handLayer.property("Position").setValueAtTime(playhead.getCurrentSecond(), restingPos);
            handLayer.property("Position").setInterpolationTypeAtKey(handLayer.property("Position").numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
            handLayer.property("Position").setTemporalEaseAtKey(handLayer.property("Position").numKeys, [new KeyframeEase(0, 100 / 3)], [new KeyframeEase(0, 100 / 3)]);
            handLayer.property("Position").setSpatialTangentsAtKey(handLayer.property("Position").numKeys, [0, 0, 0], [0, 0, 0]);
            playhead.moveFrames(1);
            handLayer.property("Position").setValueAtTime(playhead.getCurrentSecond(), defaultHandPos);
            handLayer.property("Position").setInterpolationTypeAtKey(handLayer.property("Position").numKeys, KeyframeInterpolationType.LINEAR, KeyframeInterpolationType.LINEAR);
            handLayer.property("Position").setSpatialTangentsAtKey(handLayer.property("Position").numKeys, [0, 0, 0], [0, 0, 0]);
        }
        else {
            playhead.moveFrames(1);
        }
        playhead.moveFrames(this.handMoveDuration);
        element.getLayer().property("Position").setValueAtTime(playhead.getCurrentSecond(), currentLayerPos);
        element.getLayer().property("Position").setInterpolationTypeAtKey(element.getLayer().property("Position").numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
        element.getLayer().property("Position").setTemporalEaseAtKey(element.getLayer().property("Position").numKeys, [new KeyframeEase(0, 100 / 3)], [new KeyframeEase(0, 100 / 3)]);
        element.getLayer().property("Position").setSpatialTangentsAtKey(element.getLayer().property("Position").numKeys, [0, 0, 0], [0, 0, 0]);
        if (hand === true) {
            handLayer.property("Position").setValueAtTime(playhead.getCurrentSecond(), currentLayerPos);
            handLayer.property("Position").setInterpolationTypeAtKey(handLayer.property("Position").numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
            handLayer.property("Position").setTemporalEaseAtKey(handLayer.property("Position").numKeys, [new KeyframeEase(0, 100 / 3)], [new KeyframeEase(0, 100 / 3)]);
            handLayer.property("Position").setSpatialTangentsAtKey(handLayer.property("Position").numKeys, [0, 0, 0], [0, 0, 0]);
        }
        playhead.moveFrames(this.handDelay);
        element.getLayer().property("Position").setValueAtTime(playhead.getCurrentSecond(), currentLayerPos);
        element.getLayer().property("Position").setInterpolationTypeAtKey(element.getLayer().property("Position").numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
        element.getLayer().property("Position").setTemporalEaseAtKey(element.getLayer().property("Position").numKeys, [new KeyframeEase(0, 100 / 3)], [new KeyframeEase(0, 100 / 3)]);
        element.getLayer().property("Position").setSpatialTangentsAtKey(element.getLayer().property("Position").numKeys, [0, 0, 0], [0, 0, 0]);
        if (hand === true) {
            handLayer.property("Position").setValueAtTime(playhead.getCurrentSecond(), currentLayerPos);
            handLayer.property("Position").setInterpolationTypeAtKey(handLayer.property("Position").numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
            handLayer.property("Position").setTemporalEaseAtKey(handLayer.property("Position").numKeys, [new KeyframeEase(0, 100 / 3)], [new KeyframeEase(0, 100 / 3)]);
            handLayer.property("Position").setSpatialTangentsAtKey(handLayer.property("Position").numKeys, [0, 0, 0], [0, 0, 0]);
        }
        playhead.moveFrames(this.handMoveDuration);
        element.getLayer().property("Position").setValueAtTime(playhead.getCurrentSecond(), restingPos);
        element.getLayer().property("Position").setInterpolationTypeAtKey(element.getLayer().property("Position").numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
        element.getLayer().property("Position").setTemporalEaseAtKey(element.getLayer().property("Position").numKeys, [new KeyframeEase(0, 100 / 3)], [new KeyframeEase(0, 100 / 3)]);
        element.getLayer().property("Position").setSpatialTangentsAtKey(element.getLayer().property("Position").numKeys, [0, 0, 0], [0, 0, 0]);
        if (hand === true) {
            handLayer.property("Position").setValueAtTime(playhead.getCurrentSecond(), defaultHandPos);
            handLayer.property("Position").setInterpolationTypeAtKey(handLayer.property("Position").numKeys, KeyframeInterpolationType.LINEAR, KeyframeInterpolationType.LINEAR);
            handLayer.property("Position").setSpatialTangentsAtKey(handLayer.property("Position").numKeys, [0, 0, 0], [0, 0, 0]);
            playhead.moveFrames(1);
            handLayer.property("Position").setValueAtTime(playhead.getCurrentSecond(), restingPos);
            handLayer.property("Position").setInterpolationTypeAtKey(handLayer.property("Position").numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
            handLayer.property("Position").setTemporalEaseAtKey(handLayer.property("Position").numKeys, [new KeyframeEase(0, 100 / 3)], [new KeyframeEase(0, 100 / 3)]);
            handLayer.property("Position").setSpatialTangentsAtKey(handLayer.property("Position").numKeys, [0, 0, 0], [0, 0, 0]);
        }
    };
    Pusher.prototype.drawGroup = function (group, playhead) {
        var _a = this.validateOptions(group), hand = _a[0], direction = _a[1];
        var handLayer = this.BTT_hand;
        switch (direction) {
            case 'ltr':
                handLayer = this.LTR_hand;
                break;
            case 'rtl':
                handLayer = this.RTL_hand;
                break;
            case 'btt':
                handLayer = this.BTT_hand;
                break;
            case 'ttb':
                handLayer = this.TTB_hand;
                break;
            default:
                handLayer = this.BTT_hand;
                break;
        }
        var currentGroupPos = [0, 0, 0];
        var groupBounds = getGroupBoundaries(group, true, playhead.getCurrentSecond());
        currentGroupPos[0] = groupBounds[1] + ((groupBounds[2] - groupBounds[1]) / 2);
        currentGroupPos[1] = groupBounds[0] + ((groupBounds[3] - groupBounds[0]) / 2);
        currentGroupPos[2] = Math.min.apply(Math, this.getGroupDepths(group, playhead.getCurrentSecond()));
        var defaultHandPos = [0, 0];
        var drawingHandPoints = getLayerPoints(handLayer, true, playhead.getCurrentSecond());
        defaultHandPos[0] = drawingHandPoints[1] + ((drawingHandPoints[2] - drawingHandPoints[1]) / 2);
        defaultHandPos[1] = drawingHandPoints[0] + ((drawingHandPoints[3] - drawingHandPoints[0]) / 2);
        var currentLayerPositions = new Array();
        group.iterate(function (element) {
            var layerPosition = [0, 0, 0];
            var elementPoints = getLayerPoints(element.getLayer(), true, playhead.getCurrentSecond());
            layerPosition[0] = elementPoints[1] + ((elementPoints[2] - elementPoints[1]) / 2);
            layerPosition[1] = elementPoints[0] + ((elementPoints[3] - elementPoints[0]) / 2);
            if (element.getLayer().property("Position").numKeys > 0) {
                layerPosition[2] = element.getLayer().property("Position").nearestKeyIndex(playhead.getCurrentSecond());
            }
            else {
                layerPosition[2] = element.getLayer().property("Position").value[2];
            }
            currentLayerPositions.push(layerPosition);
        }, true);
        var handRestingPos = [0, 0, 0];
        switch (direction) {
            case 'ltr':
                handRestingPos = [defaultHandPos[0], currentGroupPos[1], currentGroupPos[2]];
                break;
            case 'rtl':
                handRestingPos = [defaultHandPos[0], currentGroupPos[1], currentGroupPos[2]];
                break;
            case 'btt':
                handRestingPos = [currentGroupPos[0], defaultHandPos[1], currentGroupPos[2]];
                break;
            case 'ttb':
                handRestingPos = [currentGroupPos[0], defaultHandPos[1], currentGroupPos[2]];
                break;
            default:
                handRestingPos = [defaultHandPos[0], currentGroupPos[1], currentGroupPos[2]];
                break;
        }
        if (hand === true) {
            handLayer.property("Position").setValueAtTime(playhead.getCurrentSecond(), defaultHandPos);
            playhead.moveFrames(1);
            handLayer.property("Position").setValueAtTime(playhead.getCurrentSecond(), handRestingPos);
        }
        var i = 0;
        group.iterate(function (element) {
            var restingPos = [0, 0, 0];
            switch (direction) {
                case 'ltr':
                    restingPos = [defaultHandPos[0], currentLayerPositions[i][1], currentLayerPositions[i][2]];
                    break;
                case 'rtl':
                    restingPos = [defaultHandPos[0], currentLayerPositions[i][1], currentLayerPositions[i][2]];
                    break;
                case 'btt':
                    restingPos = [currentLayerPositions[i][0], defaultHandPos[1], currentLayerPositions[i][2]];
                    break;
                case 'ttb':
                    restingPos = [currentLayerPositions[i][0], defaultHandPos[1], currentLayerPositions[i][2]];
                    break;
                default:
                    restingPos = [defaultHandPos[0], currentLayerPositions[i][1], currentLayerPositions[i][2]];
                    break;
            }
            element.getLayer().property("Position").setValueAtTime(playhead.getCurrentSecond(), restingPos);
            element.getLayer().property("Position").setInterpolationTypeAtKey(element.getLayer().property("Position").numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
            i++;
        }, true);
        playhead.moveFrames(this.handMoveDuration);
        if (hand === true) {
            handLayer.property("Position").setValueAtTime(playhead.getCurrentSecond(), currentGroupPos);
        }
        i = 0;
        group.iterate(function (element) {
            element.getLayer().property("Position").setValueAtTime(playhead.getCurrentSecond(), currentLayerPositions[i]);
            element.getLayer().property("Position").setInterpolationTypeAtKey(element.getLayer().property("Position").numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
            i++;
        }, true);
        playhead.moveFrames(this.handDelay);
        if (hand === true) {
            handLayer.property("Position").setValueAtTime(playhead.getCurrentSecond(), currentGroupPos);
        }
        i = 0;
        group.iterate(function (element) {
            element.getLayer().property("Position").setValueAtTime(playhead.getCurrentSecond(), currentLayerPositions[i]);
            element.getLayer().property("Position").setInterpolationTypeAtKey(element.getLayer().property("Position").numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
            i++;
        }, true);
        playhead.moveFrames(this.handMoveDuration);
        if (hand === true) {
            handLayer.property("Position").setValueAtTime(playhead.getCurrentSecond(), handRestingPos);
            playhead.moveFrames(1);
            handLayer.property("Position").setValueAtTime(playhead.getCurrentSecond(), defaultHandPos);
        }
    };
    Pusher.prototype.eraseGroup = function (group, playhead) {
        var _a = this.validateOptions(group), hand = _a[0], direction = _a[1];
        var handLayer = this.BTT_hand;
        switch (direction) {
            case 'ltr':
                handLayer = this.LTR_hand;
                break;
            case 'rtl':
                handLayer = this.RTL_hand;
                break;
            case 'btt':
                handLayer = this.BTT_hand;
                break;
            case 'ttb':
                handLayer = this.TTB_hand;
                break;
            default:
                handLayer = this.BTT_hand;
                break;
        }
        var currentGroupPos = [0, 0, 0];
        var groupBounds = getGroupBoundaries(group, true, playhead.getCurrentSecond());
        currentGroupPos[0] = groupBounds[1] + ((groupBounds[2] - groupBounds[1]) / 2);
        currentGroupPos[1] = groupBounds[0] + ((groupBounds[3] - groupBounds[0]) / 2);
        currentGroupPos[2] = Math.min.apply(Math, this.getGroupDepths(group, playhead.getCurrentSecond()));
        var defaultHandPos = [0, 0];
        var drawingHandPoints = getLayerPoints(handLayer, true, playhead.getCurrentSecond());
        defaultHandPos[0] = drawingHandPoints[1] + ((drawingHandPoints[2] - drawingHandPoints[1]) / 2);
        defaultHandPos[1] = drawingHandPoints[0] + ((drawingHandPoints[3] - drawingHandPoints[0]) / 2);
        var currentLayerPositions = new Array();
        group.iterate(function (element) {
            var layerPosition = [0, 0, 0];
            var elementPoints = getLayerPoints(element.getLayer(), true, playhead.getCurrentSecond());
            layerPosition[0] = elementPoints[1] + ((elementPoints[2] - elementPoints[1]) / 2);
            layerPosition[1] = elementPoints[0] + ((elementPoints[3] - elementPoints[0]) / 2);
            if (element.getLayer().property("Position").numKeys > 0) {
                layerPosition[2] = element.getLayer().property("Position").nearestKeyIndex(playhead.getCurrentSecond());
            }
            else {
                layerPosition[2] = element.getLayer().property("Position").value[2];
            }
            currentLayerPositions.push(layerPosition);
        }, true);
        var handRestingPos = [0, 0, 0];
        switch (direction) {
            case 'ltr':
                handRestingPos = [defaultHandPos[0], currentGroupPos[1], currentGroupPos[2]];
                break;
            case 'rtl':
                handRestingPos = [defaultHandPos[0], currentGroupPos[1], currentGroupPos[2]];
                break;
            case 'btt':
                handRestingPos = [currentGroupPos[0], defaultHandPos[1], currentGroupPos[2]];
                break;
            case 'ttb':
                handRestingPos = [currentGroupPos[0], defaultHandPos[1], currentGroupPos[2]];
                break;
            default:
                handRestingPos = [defaultHandPos[0], currentGroupPos[1], currentGroupPos[2]];
                break;
        }
        if (hand === true) {
            handLayer.property("Position").setValueAtTime(playhead.getCurrentSecond(), handRestingPos);
            playhead.moveFrames(1);
            handLayer.property("Position").setValueAtTime(playhead.getCurrentSecond(), defaultHandPos);
        }
        playhead.moveFrames(this.handMoveDuration);
        if (hand === true) {
            handLayer.property("Position").setValueAtTime(playhead.getCurrentSecond(), currentGroupPos);
        }
        var i = 0;
        group.iterate(function (element) {
            element.getLayer().property("Position").setValueAtTime(playhead.getCurrentSecond(), currentLayerPositions[i]);
            element.getLayer().property("Position").setInterpolationTypeAtKey(element.getLayer().property("Position").numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
            i++;
        }, true);
        playhead.moveFrames(this.handDelay);
        if (hand === true) {
            handLayer.property("Position").setValueAtTime(playhead.getCurrentSecond(), currentGroupPos);
        }
        i = 0;
        group.iterate(function (element) {
            element.getLayer().property("Position").setValueAtTime(playhead.getCurrentSecond(), currentLayerPositions[i]);
            element.getLayer().property("Position").setInterpolationTypeAtKey(element.getLayer().property("Position").numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
            i++;
        }, true);
        playhead.moveFrames(this.handMoveDuration);
        if (hand === true) {
            handLayer.property("Position").setValueAtTime(playhead.getCurrentSecond(), defaultHandPos);
            playhead.moveFrames(1);
            handLayer.property("Position").setValueAtTime(playhead.getCurrentSecond(), handRestingPos);
        }
        i = 0;
        group.iterate(function (element) {
            var restingPos = [0, 0, 0];
            switch (direction) {
                case 'ltr':
                    restingPos = [defaultHandPos[0], currentLayerPositions[i][1], currentLayerPositions[i][2]];
                    break;
                case 'rtl':
                    restingPos = [defaultHandPos[0], currentLayerPositions[i][1], currentLayerPositions[i][2]];
                    break;
                case 'btt':
                    restingPos = [currentLayerPositions[i][0], defaultHandPos[1], currentLayerPositions[i][2]];
                    break;
                case 'ttb':
                    restingPos = [currentLayerPositions[i][0], defaultHandPos[1], currentLayerPositions[i][2]];
                    break;
                default:
                    restingPos = [defaultHandPos[0], currentLayerPositions[i][1], currentLayerPositions[i][2]];
                    break;
            }
            element.getLayer().property("Position").setValueAtTime(playhead.getCurrentSecond(), restingPos);
            element.getLayer().property("Position").setInterpolationTypeAtKey(element.getLayer().property("Position").numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
            i++;
        }, true);
    };
    Pusher.prototype.condition = function (element) {
        return true;
    };
    Pusher.prototype.getGroupDepths = function (group, time) {
        var elementDepths = [];
        for (var i = 0; i < group.length; i++) {
            var element = group.get(i);
            if (isType(element, Element)) {
                elementDepths.push(element.getLayer().property("Position").valueAtTime(time, true)[2]);
            }
            else if (isType(element, ElementGroup)) {
                var groupDepths = this.getGroupDepths(element, time);
                elementDepths = elementDepths.concat(groupDepths);
            }
        }
        return elementDepths;
    };
    Pusher.prototype.getID = function () {
        return "pusher";
    };
    Pusher.prototype.validateOptions = function (element) {
        var hand = true;
        var direction = "btt";
        if (element.getProperties().get("hand")) {
            hand = element.getProperties().get("hand").getValue();
        }
        if (element.getProperties().get("direction")) {
            direction = element.getProperties().get("direction").getValue();
        }
        return [hand, direction];
    };
    return Pusher;
}(Drawer));
