//@include "../Drawer.js"
//@include "../../utils.js"

class Pusher extends Drawer {

    protected handMoveDuration: number = 35;
    protected handDelay: number = 9;

    protected BTT_hand: AVLayer = null;
    protected TTB_hand: AVLayer = null;
    protected LTR_hand: AVLayer = null;
    protected RTL_hand: AVLayer = null;

    constructor(hands: [AVLayer, AVLayer, AVLayer, AVLayer]) {
        super(hands[0], hands[0]);

        this.BTT_hand = hands[0];
        this.TTB_hand = hands[1];
        this.LTR_hand = hands[2];
        this.RTL_hand = hands[3];
    }

    drawElement(element: Element, playhead: Playhead) {
        let [hand, direction]: [boolean, string] = this.validateOptions(element);
        let handLayer: AVLayer = this.BTT_hand;

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

        let currentLayerPos: [number, number, number] = [0, 0, 0];
        let elementPoints: [number, number, number, number] = getLayerPoints(element.getLayer(), true, playhead.getCurrentSecond());
        currentLayerPos[0] = elementPoints[1] + ((elementPoints[2] - elementPoints[1]) / 2);
        currentLayerPos[1] = elementPoints[0] + ((elementPoints[3] - elementPoints[0]) / 2);
        currentLayerPos[2] = <number>(<Property>element.getLayer().property("Position")).valueAtTime(playhead.getCurrentSecond(), true)[2];

        let defaultHandPos: [number, number] = [0, 0];
        let drawingHandPoints: [number, number, number, number] = getLayerPoints(handLayer, true, playhead.getCurrentSecond());
        defaultHandPos[0] = drawingHandPoints[1] + ((drawingHandPoints[2] - drawingHandPoints[1]) / 2);
        defaultHandPos[1] = drawingHandPoints[0] + ((drawingHandPoints[3] - drawingHandPoints[0]) / 2);

        let restingPos: [number, number, number] = [0, 0, 0];

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
            (<Property>handLayer.property("Position")).setValueAtTime(playhead.getCurrentSecond(), defaultHandPos);
            (<Property>handLayer.property("Position")).setInterpolationTypeAtKey((<Property>handLayer.property("Position")).numKeys, KeyframeInterpolationType.LINEAR, KeyframeInterpolationType.LINEAR);
            (<Property>handLayer.property("Position")).setSpatialTangentsAtKey((<Property>handLayer.property("Position")).numKeys, [0, 0, 0], [0, 0, 0]);
            playhead.moveFrames(1);
            (<Property>handLayer.property("Position")).setValueAtTime(playhead.getCurrentSecond(), restingPos);
            (<Property>handLayer.property("Position")).setInterpolationTypeAtKey((<Property>handLayer.property("Position")).numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
            (<Property>handLayer.property("Position")).setTemporalEaseAtKey((<Property>handLayer.property("Position")).numKeys, [new KeyframeEase(0, 100/3)], [new KeyframeEase(0, 100/3)]);
            (<Property>handLayer.property("Position")).setSpatialTangentsAtKey((<Property>handLayer.property("Position")).numKeys, [0, 0, 0], [0, 0, 0]);
        }
        (<Property>element.getLayer().property("Position")).setValueAtTime(playhead.getCurrentSecond(), restingPos);
        (<Property>element.getLayer().property("Position")).setInterpolationTypeAtKey((<Property>element.getLayer().property("Position")).numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
        (<Property>element.getLayer().property("Position")).setTemporalEaseAtKey((<Property>element.getLayer().property("Position")).numKeys, [new KeyframeEase(0, 100/3)], [new KeyframeEase(0, 100/3)]);
        (<Property>element.getLayer().property("Position")).setSpatialTangentsAtKey((<Property>element.getLayer().property("Position")).numKeys, [0, 0, 0], [0, 0, 0]);
        playhead.moveFrames(this.handMoveDuration);

        if (hand === true) {
            (<Property>handLayer.property("Position")).setValueAtTime(playhead.getCurrentSecond(), currentLayerPos);
            (<Property>handLayer.property("Position")).setInterpolationTypeAtKey((<Property>handLayer.property("Position")).numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
            (<Property>handLayer.property("Position")).setTemporalEaseAtKey((<Property>handLayer.property("Position")).numKeys, [new KeyframeEase(0, 100/3)], [new KeyframeEase(0, 100/3)]);
            (<Property>handLayer.property("Position")).setSpatialTangentsAtKey((<Property>handLayer.property("Position")).numKeys, [0, 0, 0], [0, 0, 0]);
        }
        (<Property>element.getLayer().property("Position")).setValueAtTime(playhead.getCurrentSecond(), currentLayerPos);
        (<Property>element.getLayer().property("Position")).setInterpolationTypeAtKey((<Property>element.getLayer().property("Position")).numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
        (<Property>element.getLayer().property("Position")).setTemporalEaseAtKey((<Property>element.getLayer().property("Position")).numKeys, [new KeyframeEase(0, 100/3)], [new KeyframeEase(0, 100/3)]);
        (<Property>element.getLayer().property("Position")).setSpatialTangentsAtKey((<Property>element.getLayer().property("Position")).numKeys, [0, 0, 0], [0, 0, 0]);

        playhead.moveFrames(this.handDelay);

        if (hand === true) {
            (<Property>handLayer.property("Position")).setValueAtTime(playhead.getCurrentSecond(), currentLayerPos);
            (<Property>handLayer.property("Position")).setInterpolationTypeAtKey((<Property>handLayer.property("Position")).numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
            (<Property>handLayer.property("Position")).setTemporalEaseAtKey((<Property>handLayer.property("Position")).numKeys, [new KeyframeEase(0, 100/3)], [new KeyframeEase(0, 100/3)]);
            (<Property>handLayer.property("Position")).setSpatialTangentsAtKey((<Property>handLayer.property("Position")).numKeys, [0, 0, 0], [0, 0, 0]);
        }
        (<Property>element.getLayer().property("Position")).setValueAtTime(playhead.getCurrentSecond(), currentLayerPos);

        playhead.moveFrames(this.handMoveDuration);

        if (hand === true) {
            (<Property>handLayer.property("Position")).setValueAtTime(playhead.getCurrentSecond(), restingPos);
            (<Property>handLayer.property("Position")).setInterpolationTypeAtKey((<Property>handLayer.property("Position")).numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
            (<Property>handLayer.property("Position")).setTemporalEaseAtKey((<Property>handLayer.property("Position")).numKeys, [new KeyframeEase(0, 100/3)], [new KeyframeEase(0, 100/3)]);
            (<Property>handLayer.property("Position")).setSpatialTangentsAtKey((<Property>handLayer.property("Position")).numKeys, [0, 0, 0], [0, 0, 0]);
            playhead.moveFrames(1);
            (<Property>handLayer.property("Position")).setValueAtTime(playhead.getCurrentSecond(), defaultHandPos);
            (<Property>handLayer.property("Position")).setInterpolationTypeAtKey((<Property>handLayer.property("Position")).numKeys, KeyframeInterpolationType.LINEAR, KeyframeInterpolationType.LINEAR);
            (<Property>handLayer.property("Position")).setSpatialTangentsAtKey((<Property>handLayer.property("Position")).numKeys, [0, 0, 0], [0, 0, 0]);
        } else {
            playhead.moveFrames(1);
        }
    }

    eraseElement(element: Element, playhead: Playhead) {
        let [hand, direction]: [boolean, string] = this.validateOptions(element);
        let handLayer: AVLayer = this.BTT_hand;

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

        let currentLayerPos: [number, number, number] = [0, 0, 0];
        let elementPoints: [number, number, number, number] = getLayerPoints(element.getLayer(), true, playhead.getCurrentSecond());
        currentLayerPos[0] = elementPoints[1] + ((elementPoints[2] - elementPoints[1]) / 2);
        currentLayerPos[1] = elementPoints[0] + ((elementPoints[3] - elementPoints[0]) / 2);
        currentLayerPos[2] = <number>(<Property>element.getLayer().property("Position")).valueAtTime(playhead.getCurrentSecond(), true)[2];

        let defaultHandPos: [number, number] = [0, 0];
        let drawingHandPoints: [number, number, number, number] = getLayerPoints(handLayer, true, playhead.getCurrentSecond());
        defaultHandPos[0] = drawingHandPoints[1] + ((drawingHandPoints[2] - drawingHandPoints[1]) / 2);
        defaultHandPos[1] = drawingHandPoints[0] + ((drawingHandPoints[3] - drawingHandPoints[0]) / 2);

        let restingPos: [number, number, number] = [0, 0, 0];

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
            (<Property>handLayer.property("Position")).setValueAtTime(playhead.getCurrentSecond(), restingPos);
            (<Property>handLayer.property("Position")).setInterpolationTypeAtKey((<Property>handLayer.property("Position")).numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
            (<Property>handLayer.property("Position")).setTemporalEaseAtKey((<Property>handLayer.property("Position")).numKeys, [new KeyframeEase(0, 100/3)], [new KeyframeEase(0, 100/3)]);
            (<Property>handLayer.property("Position")).setSpatialTangentsAtKey((<Property>handLayer.property("Position")).numKeys, [0, 0, 0], [0, 0, 0]);
            playhead.moveFrames(1);
            (<Property>handLayer.property("Position")).setValueAtTime(playhead.getCurrentSecond(), defaultHandPos);
            (<Property>handLayer.property("Position")).setInterpolationTypeAtKey((<Property>handLayer.property("Position")).numKeys, KeyframeInterpolationType.LINEAR, KeyframeInterpolationType.LINEAR);
            (<Property>handLayer.property("Position")).setSpatialTangentsAtKey((<Property>handLayer.property("Position")).numKeys, [0, 0, 0], [0, 0, 0]);
        } else {
            playhead.moveFrames(1);
        }

        playhead.moveFrames(this.handMoveDuration);

        (<Property>element.getLayer().property("Position")).setValueAtTime(playhead.getCurrentSecond(), currentLayerPos);
        (<Property>element.getLayer().property("Position")).setInterpolationTypeAtKey((<Property>element.getLayer().property("Position")).numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
        (<Property>element.getLayer().property("Position")).setTemporalEaseAtKey((<Property>element.getLayer().property("Position")).numKeys, [new KeyframeEase(0, 100/3)], [new KeyframeEase(0, 100/3)]);
        (<Property>element.getLayer().property("Position")).setSpatialTangentsAtKey((<Property>element.getLayer().property("Position")).numKeys, [0, 0, 0], [0, 0, 0]);

        if (hand === true) {
            (<Property>handLayer.property("Position")).setValueAtTime(playhead.getCurrentSecond(), currentLayerPos);
            (<Property>handLayer.property("Position")).setInterpolationTypeAtKey((<Property>handLayer.property("Position")).numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
            (<Property>handLayer.property("Position")).setTemporalEaseAtKey((<Property>handLayer.property("Position")).numKeys, [new KeyframeEase(0, 100/3)], [new KeyframeEase(0, 100/3)]);
            (<Property>handLayer.property("Position")).setSpatialTangentsAtKey((<Property>handLayer.property("Position")).numKeys, [0, 0, 0], [0, 0, 0]);
        }

        playhead.moveFrames(this.handDelay);

        (<Property>element.getLayer().property("Position")).setValueAtTime(playhead.getCurrentSecond(), currentLayerPos);
        (<Property>element.getLayer().property("Position")).setInterpolationTypeAtKey((<Property>element.getLayer().property("Position")).numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
        (<Property>element.getLayer().property("Position")).setTemporalEaseAtKey((<Property>element.getLayer().property("Position")).numKeys, [new KeyframeEase(0, 100/3)], [new KeyframeEase(0, 100/3)]);
        (<Property>element.getLayer().property("Position")).setSpatialTangentsAtKey((<Property>element.getLayer().property("Position")).numKeys, [0, 0, 0], [0, 0, 0]);


        if (hand === true) {
            (<Property>handLayer.property("Position")).setValueAtTime(playhead.getCurrentSecond(), currentLayerPos);
            (<Property>handLayer.property("Position")).setInterpolationTypeAtKey((<Property>handLayer.property("Position")).numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
            (<Property>handLayer.property("Position")).setTemporalEaseAtKey((<Property>handLayer.property("Position")).numKeys, [new KeyframeEase(0, 100/3)], [new KeyframeEase(0, 100/3)]);
            (<Property>handLayer.property("Position")).setSpatialTangentsAtKey((<Property>handLayer.property("Position")).numKeys, [0, 0, 0], [0, 0, 0]);
        }

        playhead.moveFrames(this.handMoveDuration);

        (<Property>element.getLayer().property("Position")).setValueAtTime(playhead.getCurrentSecond(), restingPos);
        (<Property>element.getLayer().property("Position")).setInterpolationTypeAtKey((<Property>element.getLayer().property("Position")).numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
        (<Property>element.getLayer().property("Position")).setTemporalEaseAtKey((<Property>element.getLayer().property("Position")).numKeys, [new KeyframeEase(0, 100/3)], [new KeyframeEase(0, 100/3)]);
        (<Property>element.getLayer().property("Position")).setSpatialTangentsAtKey((<Property>element.getLayer().property("Position")).numKeys, [0, 0, 0], [0, 0, 0]);
        
        if (hand === true) {
            (<Property>handLayer.property("Position")).setValueAtTime(playhead.getCurrentSecond(), defaultHandPos);
            (<Property>handLayer.property("Position")).setInterpolationTypeAtKey((<Property>handLayer.property("Position")).numKeys, KeyframeInterpolationType.LINEAR, KeyframeInterpolationType.LINEAR);
            (<Property>handLayer.property("Position")).setSpatialTangentsAtKey((<Property>handLayer.property("Position")).numKeys, [0, 0, 0], [0, 0, 0]);
            playhead.moveFrames(1);
            (<Property>handLayer.property("Position")).setValueAtTime(playhead.getCurrentSecond(), restingPos);
            (<Property>handLayer.property("Position")).setInterpolationTypeAtKey((<Property>handLayer.property("Position")).numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
            (<Property>handLayer.property("Position")).setTemporalEaseAtKey((<Property>handLayer.property("Position")).numKeys, [new KeyframeEase(0, 100/3)], [new KeyframeEase(0, 100/3)]);
            (<Property>handLayer.property("Position")).setSpatialTangentsAtKey((<Property>handLayer.property("Position")).numKeys, [0, 0, 0], [0, 0, 0]);
        }
    }

    drawGroup(group: ElementGroup, playhead: Playhead) {
        let [hand, direction]: [boolean, string] = this.validateOptions(group);
        let handLayer: AVLayer = this.BTT_hand;
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

        let currentGroupPos: [number, number, number] = [0, 0, 0];
        let groupBounds: [number, number, number, number] = getGroupBoundaries(group, true, playhead.getCurrentSecond());
        currentGroupPos[0] = groupBounds[1] + ((groupBounds[2] - groupBounds[1]) / 2);
        currentGroupPos[1] = groupBounds[0] + ((groupBounds[3] - groupBounds[0]) / 2);
        currentGroupPos[2] = Math.min(...this.getGroupDepths(group, playhead.getCurrentSecond()));

        let defaultHandPos: [number, number] = [0, 0];
        let drawingHandPoints: [number, number, number, number] = getLayerPoints(handLayer, true, playhead.getCurrentSecond());
        defaultHandPos[0] = drawingHandPoints[1] + ((drawingHandPoints[2] - drawingHandPoints[1]) / 2);
        defaultHandPos[1] = drawingHandPoints[0] + ((drawingHandPoints[3] - drawingHandPoints[0]) / 2);

        let currentLayerPositions: Array<[number, number, number]> = new Array<[number, number, number]>();
        group.iterate(function (element: Element) {
            let layerPosition: [number, number, number] = [0, 0, 0];
            let elementPoints: [number, number, number, number] = getLayerPoints(element.getLayer(), true, playhead.getCurrentSecond());
            layerPosition[0] = elementPoints[1] + ((elementPoints[2] - elementPoints[1]) / 2);
            layerPosition[1] = elementPoints[0] + ((elementPoints[3] - elementPoints[0]) / 2);
            if ((<Property>element.getLayer().property("Position")).numKeys > 0) {
                layerPosition[2] = (<Property>element.getLayer().property("Position")).nearestKeyIndex(playhead.getCurrentSecond());
            } else {
                layerPosition[2] = (<Property>element.getLayer().property("Position")).value[2];
            }
            currentLayerPositions.push(layerPosition);
        }, true);


        let handRestingPos: [number, number, number] = [0, 0, 0];
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
            (<Property>handLayer.property("Position")).setValueAtTime(playhead.getCurrentSecond(), defaultHandPos);
            playhead.moveFrames(1);
            (<Property>handLayer.property("Position")).setValueAtTime(playhead.getCurrentSecond(), handRestingPos);
        }
        let i = 0;
        group.iterate(function (element: Element) {
            let restingPos: [number, number, number] = [0, 0, 0];
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

            (<Property>element.getLayer().property("Position")).setValueAtTime(playhead.getCurrentSecond(), restingPos);
            (<Property>element.getLayer().property("Position")).setInterpolationTypeAtKey((<Property>element.getLayer().property("Position")).numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
            i++;
        }, true);


        playhead.moveFrames(this.handMoveDuration);


        if (hand === true) {
            (<Property>handLayer.property("Position")).setValueAtTime(playhead.getCurrentSecond(), currentGroupPos);
        }
        i = 0;
        group.iterate(function (element: Element) {
            (<Property>element.getLayer().property("Position")).setValueAtTime(playhead.getCurrentSecond(), currentLayerPositions[i]);
            (<Property>element.getLayer().property("Position")).setInterpolationTypeAtKey((<Property>element.getLayer().property("Position")).numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
            i++;
        }, true);


        playhead.moveFrames(this.handDelay);

        if (hand === true) {
            (<Property>handLayer.property("Position")).setValueAtTime(playhead.getCurrentSecond(), currentGroupPos);
        }
        i = 0;
        group.iterate(function (element: Element) {
            (<Property>element.getLayer().property("Position")).setValueAtTime(playhead.getCurrentSecond(), currentLayerPositions[i]);
            (<Property>element.getLayer().property("Position")).setInterpolationTypeAtKey((<Property>element.getLayer().property("Position")).numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
            i++;
        }, true);


        playhead.moveFrames(this.handMoveDuration);

        if (hand === true) {
            (<Property>handLayer.property("Position")).setValueAtTime(playhead.getCurrentSecond(), handRestingPos);
            playhead.moveFrames(1);
            (<Property>handLayer.property("Position")).setValueAtTime(playhead.getCurrentSecond(), defaultHandPos);
        }
    }

    eraseGroup(group: ElementGroup, playhead: Playhead) {
        let [hand, direction]: [boolean, string] = this.validateOptions(group);
        let handLayer: AVLayer = this.BTT_hand;
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

        let currentGroupPos: [number, number, number] = [0, 0, 0];
        let groupBounds: [number, number, number, number] = getGroupBoundaries(group, true, playhead.getCurrentSecond());
        currentGroupPos[0] = groupBounds[1] + ((groupBounds[2] - groupBounds[1]) / 2);
        currentGroupPos[1] = groupBounds[0] + ((groupBounds[3] - groupBounds[0]) / 2);
        currentGroupPos[2] = Math.min(...this.getGroupDepths(group, playhead.getCurrentSecond()));

        let defaultHandPos: [number, number] = [0, 0];
        let drawingHandPoints: [number, number, number, number] = getLayerPoints(handLayer, true, playhead.getCurrentSecond());
        defaultHandPos[0] = drawingHandPoints[1] + ((drawingHandPoints[2] - drawingHandPoints[1]) / 2);
        defaultHandPos[1] = drawingHandPoints[0] + ((drawingHandPoints[3] - drawingHandPoints[0]) / 2);

        let currentLayerPositions: Array<[number, number, number]> = new Array<[number, number, number]>();
        group.iterate(function (element: Element) {
            let layerPosition: [number, number, number] = [0, 0, 0];
            let elementPoints: [number, number, number, number] = getLayerPoints(element.getLayer(), true, playhead.getCurrentSecond());
            layerPosition[0] = elementPoints[1] + ((elementPoints[2] - elementPoints[1]) / 2);
            layerPosition[1] = elementPoints[0] + ((elementPoints[3] - elementPoints[0]) / 2);
            if ((<Property>element.getLayer().property("Position")).numKeys > 0) {
                layerPosition[2] = (<Property>element.getLayer().property("Position")).nearestKeyIndex(playhead.getCurrentSecond());
            } else {
                layerPosition[2] = (<Property>element.getLayer().property("Position")).value[2];
            }
            currentLayerPositions.push(layerPosition);
        }, true);


        let handRestingPos: [number, number, number] = [0, 0, 0];
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
            (<Property>handLayer.property("Position")).setValueAtTime(playhead.getCurrentSecond(), handRestingPos);
            playhead.moveFrames(1);
            (<Property>handLayer.property("Position")).setValueAtTime(playhead.getCurrentSecond(), defaultHandPos);
        }

        playhead.moveFrames(this.handMoveDuration);

        if (hand === true) {
            (<Property>handLayer.property("Position")).setValueAtTime(playhead.getCurrentSecond(), currentGroupPos);
        }
        let i = 0;
        group.iterate(function (element: Element) {
            (<Property>element.getLayer().property("Position")).setValueAtTime(playhead.getCurrentSecond(), currentLayerPositions[i]);
            (<Property>element.getLayer().property("Position")).setInterpolationTypeAtKey((<Property>element.getLayer().property("Position")).numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
            i++;
        }, true);

        playhead.moveFrames(this.handDelay);

        if (hand === true) {
            (<Property>handLayer.property("Position")).setValueAtTime(playhead.getCurrentSecond(), currentGroupPos);
        }
        i = 0;
        group.iterate(function (element: Element) {
            (<Property>element.getLayer().property("Position")).setValueAtTime(playhead.getCurrentSecond(), currentLayerPositions[i]);
            (<Property>element.getLayer().property("Position")).setInterpolationTypeAtKey((<Property>element.getLayer().property("Position")).numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
            i++;
        }, true);

        playhead.moveFrames(this.handMoveDuration);

        if (hand === true) {
            (<Property>handLayer.property("Position")).setValueAtTime(playhead.getCurrentSecond(), defaultHandPos);
            playhead.moveFrames(1);
            (<Property>handLayer.property("Position")).setValueAtTime(playhead.getCurrentSecond(), handRestingPos);
        }
        i = 0;
        group.iterate(function (element: Element) {
            let restingPos: [number, number, number] = [0, 0, 0];
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

            (<Property>element.getLayer().property("Position")).setValueAtTime(playhead.getCurrentSecond(), restingPos);
            (<Property>element.getLayer().property("Position")).setInterpolationTypeAtKey((<Property>element.getLayer().property("Position")).numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
            i++;
        }, true);
    }

    condition(element: Element | ElementGroup): boolean {
        return true;
    }

    getGroupDepths(group: ElementGroup, time: number) {
        let elementDepths: number[] = [];
        for (var i = 0; i < group.length; i++) {
            let element: Element | ElementGroup = group.get(i);

            if (isType(element, Element)) {
                elementDepths.push((<Property>(<Element>element).getLayer().property("Position")).valueAtTime(time, true)[2]);
            } else if (isType(element, ElementGroup)) {
                let groupDepths: number[] = this.getGroupDepths(<ElementGroup>element, time);
                elementDepths = elementDepths.concat(groupDepths);
            }
        }

        return elementDepths;
    }

    getID(): string {
        return "pusher";
    }

    validateOptions(element: Element | ElementGroup): [boolean, string] {
        let hand = true;
        let direction = "btt";

        if (element.getProperties().get("hand")) {
            hand = (<ElementProperty>element.getProperties().get("hand")).getValue();
        }

        if (element.getProperties().get("direction")) {
            direction = (<ElementProperty>element.getProperties().get("direction")).getValue();
        }

        return [hand, direction];
    }
}