/*class Hand extends Layer {
    
}*/

//@include "./Element/ElementGroup.js"
//@include "./utils.js"

class Hand {
    comp: CompItem;
    containerLayer: AVLayer;
    name: string;
    protected builded: boolean;

    constructor(comp: CompItem, name: string) {
        this.name = name;
        this.comp = comp;
        this.builded = false;
    }

    build() {
        /*
        let mainGroup: ElementGroup = decodeTree(this.comp.layers, this.comp);

        mainGroup.sort(function (a: ElementGroup, b: ElementGroup): number {
            let aIndex = parseInt(a.getName());
            let bIndex = parseInt(b.getName());

            if (aIndex > bIndex) {
                return 1;
            } else if (aIndex < bIndex) {
                return -1;
            }

            return 0;
        });

        mainGroup.iterate(function (group: ElementGroup) {
            let hand: Element = <Element>group.get("HAND");
            let hand_loc: [number, number, number, number] = getLayerPoints(hand.getLayer(), false);
            let anchor_point: Element = <Element>group.get("ANCHOR_POINT");
            let anchor_loc: [number, number, number, number] = getLayerPoints(anchor_point.getLayer(), false);

            (<Property>hand.getLayer().property("Anchor Point")).setValue([anchor_loc[1] + ((anchor_loc[2] - anchor_loc[1]) / 2) - hand_loc[1], anchor_loc[0] + ((anchor_loc[3] - anchor_loc[0]) / 2) - hand_loc[0]]);
        });

        return this.containerLayer;
        */

        if (!this.builded) {
            let hands: Array<{ index: number, hand_layer: AVLayer, anchor_layer: AVLayer }> = new Array<{ index: number, hand_layer: AVLayer, anchor_layer: AVLayer }>();

            for (var i = 0; i < this.comp.layers.length; i++) {
                if (this.comp.layers[i + 1].name.search(/HAND/) != -1) {
                    let [index, _] = this.comp.layers[i + 1].name.split(" :: ");
                    hands.push({ index: parseInt(index), hand_layer: <AVLayer>this.comp.layers[i + 1], anchor_layer: <AVLayer>this.comp.layer(index + " :: ANCHOR_POINT") });
                }
            }

            hands.sort(function (a, b) {
                if (a.index > b.index) {
                    return 1;
                } else if (a.index < b.index) {
                    return -1;
                } else {
                    return 0;
                }
            });

            let maxWidth: number = 0;
            let maxHeight: number = 0;

            for (var i = 0; i < hands.length; i++) {
                if (maxWidth < hands[i].hand_layer.width) {
                    maxWidth = hands[i].hand_layer.width;
                }

                if (maxHeight < hands[i].hand_layer.height) {
                    maxHeight = hands[i].hand_layer.height;
                }
            }

            let handDelay: number = 3;

            for (var i = 0; i < hands.length; i++) {
                let playhead: Playhead = new Playhead(30);

                let currentHand = hands[i];

                for (var ii = 0; ii < hands.length; ii++) {
                    if (i == ii) {
                        (<Property>hands[i].hand_layer.property("Opacity")).setValueAtTime(playhead.getCurrentSecond(), 100);
                        (<Property>hands[i].hand_layer.property("Opacity")).setInterpolationTypeAtKey((<Property>hands[i].hand_layer.property("Opacity")).numKeys, KeyframeInterpolationType.HOLD, KeyframeInterpolationType.HOLD);
                    } else {
                        (<Property>hands[i].hand_layer.property("Opacity")).setValueAtTime(playhead.getCurrentSecond(), 0);
                        (<Property>hands[i].hand_layer.property("Opacity")).setInterpolationTypeAtKey((<Property>hands[i].hand_layer.property("Opacity")).numKeys, KeyframeInterpolationType.HOLD, KeyframeInterpolationType.HOLD);
                    }

                    playhead.moveFrames(1);
                }
            }

            /*for (var i = 0; i < hands.length; i++) {
                let innerPlayhead: Playhead = new Playhead(30);

                for (var ii = 0; ii < hands.length; ii++) {
                    if (i == ii) {
                        if (i == 0) {
                            (<Property>hands[i].hand_layer.property("Opacity")).setValueAtTime(innerPlayhead.getCurrentSecond(), 100);
                            (<Property>hands[i].hand_layer.property("Opacity")).setInterpolationTypeAtKey((<Property>hands[i].hand_layer.property("Opacity")).numKeys, KeyframeInterpolationType.HOLD, KeyframeInterpolationType.HOLD);
                        } else {
                            (<Property>hands[i].hand_layer.property("Opacity")).setValueAtTime(innerPlayhead.getCurrentSecond(), 0);
                            (<Property>hands[i].hand_layer.property("Opacity")).setInterpolationTypeAtKey((<Property>hands[i].hand_layer.property("Opacity")).numKeys, KeyframeInterpolationType.HOLD, KeyframeInterpolationType.HOLD);
                        }
                        innerPlayhead.moveFrames(1);
                        (<Property>hands[i].hand_layer.property("Opacity")).setValueAtTime(innerPlayhead.getCurrentSecond(), 100);
                        (<Property>hands[i].hand_layer.property("Opacity")).setInterpolationTypeAtKey((<Property>hands[i].hand_layer.property("Opacity")).numKeys, KeyframeInterpolationType.HOLD, KeyframeInterpolationType.HOLD);
                    } else {
                        if (i + 1 == ii) {
                            (<Property>hands[i].hand_layer.property("Opacity")).setValueAtTime(innerPlayhead.getCurrentSecond(), 100);
                            (<Property>hands[i].hand_layer.property("Opacity")).setInterpolationTypeAtKey((<Property>hands[i].hand_layer.property("Opacity")).numKeys, KeyframeInterpolationType.HOLD, KeyframeInterpolationType.HOLD);
                        } else {
                            (<Property>hands[i].hand_layer.property("Opacity")).setValueAtTime(innerPlayhead.getCurrentSecond(), 0);
                            (<Property>hands[i].hand_layer.property("Opacity")).setInterpolationTypeAtKey((<Property>hands[i].hand_layer.property("Opacity")).numKeys, KeyframeInterpolationType.HOLD, KeyframeInterpolationType.HOLD);
                        }
                        innerPlayhead.moveFrames(1);
                        (<Property>hands[i].hand_layer.property("Opacity")).setValueAtTime(innerPlayhead.getCurrentSecond(), 0);
                        (<Property>hands[i].hand_layer.property("Opacity")).setInterpolationTypeAtKey((<Property>hands[i].hand_layer.property("Opacity")).numKeys, KeyframeInterpolationType.HOLD, KeyframeInterpolationType.HOLD);
                    }

                    innerPlayhead.moveFrames(handDelay);
                }
            }

            playhead.moveFrames(1 * hands.length);
            playhead.moveFrames(1 * hands.length);
            playhead.moveFrames(handDelay * hands.length);

            for (var i = 0; i < hands.length; i++) {
                let innerPlayhead = new Playhead(30);
                innerPlayhead.moveFrames(playhead.getCurrentFrame());
                if (i == hands.length - 1) {
                    (<Property>hands[i].hand_layer.property("Opacity")).setValueAtTime(innerPlayhead.getCurrentSecond(), 100);
                    (<Property>hands[i].hand_layer.property("Opacity")).setInterpolationTypeAtKey((<Property>hands[i].hand_layer.property("Opacity")).numKeys, KeyframeInterpolationType.HOLD, KeyframeInterpolationType.HOLD);
                } else {
                    (<Property>hands[i].hand_layer.property("Opacity")).setValueAtTime(innerPlayhead.getCurrentSecond(), 0);
                    (<Property>hands[i].hand_layer.property("Opacity")).setInterpolationTypeAtKey((<Property>hands[i].hand_layer.property("Opacity")).numKeys, KeyframeInterpolationType.HOLD, KeyframeInterpolationType.HOLD);
                }

                innerPlayhead.moveFrames(1);

                if (i == 0) {
                    (<Property>hands[i].hand_layer.property("Opacity")).setValueAtTime(innerPlayhead.getCurrentSecond(), 100);
                    (<Property>hands[i].hand_layer.property("Opacity")).setInterpolationTypeAtKey((<Property>hands[i].hand_layer.property("Opacity")).numKeys, KeyframeInterpolationType.HOLD, KeyframeInterpolationType.HOLD);
                } else {
                    (<Property>hands[i].hand_layer.property("Opacity")).setValueAtTime(innerPlayhead.getCurrentSecond(), 0);
                    (<Property>hands[i].hand_layer.property("Opacity")).setInterpolationTypeAtKey((<Property>hands[i].hand_layer.property("Opacity")).numKeys, KeyframeInterpolationType.HOLD, KeyframeInterpolationType.HOLD);
                }
            }*/

            this.comp.width = maxWidth * 2;
            this.comp.height = maxHeight * 2;

            for (var i = 0; i < hands.length; i++) {
                let [anchor_top, anchor_left, anchor_right, anchor_bottom] = getLayerPoints(hands[i].anchor_layer, false, 0);
                let [anchor_width, anchor_height] = [anchor_right - anchor_left, anchor_bottom - anchor_top];
                let [hand_top, hand_left, hand_right, hand_bottom] = getLayerPoints(hands[i].hand_layer, false, 0);
                hands[i].anchor_layer.enabled = false;
                (<Property>hands[i].hand_layer.property("Opacity")).expression = "loopOut(\"cycle\")";
                (<Property>hands[i].hand_layer.property("Anchor Point")).setValue([anchor_left + (anchor_width / 2) - hand_left, anchor_top + (anchor_height / 2) - hand_top]);
                (<Property>hands[i].hand_layer.property("Position")).setValue([this.comp.width / 2, this.comp.height / 2]);
            }
        }
    }

    embedInComp(mainComp: CompItem): AVLayer {
        this.containerLayer = mainComp.layers.add(this.comp);
        this.containerLayer.name = this.name;

        return this.containerLayer; 
    }

    setOutPoint(time: number): void {
        if (this.comp.duration >= 9990 || this.comp.duration < time) {
            this.comp.duration = time;

            for (var i = 0; i < this.comp.layers.length; i++) {
                this.comp.layers[i + 1].outPoint = time;
            }

            this.containerLayer.outPoint = time;
        }
    }
}