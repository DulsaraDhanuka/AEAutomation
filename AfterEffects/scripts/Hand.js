/*class Hand extends Layer {
    
}*/
//@include "./Element/ElementGroup.js"
//@include "./utils.js"
var Hand = /** @class */ (function () {
    function Hand(comp, name) {
        this.name = name;
        this.comp = comp;
        this.builded = false;
    }
    Hand.prototype.build = function () {
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
            var hands = new Array();
            for (var i = 0; i < this.comp.layers.length; i++) {
                if (this.comp.layers[i + 1].name.search(/HAND/) != -1) {
                    var _a = this.comp.layers[i + 1].name.split(" :: "), index = _a[0], _ = _a[1];
                    hands.push({ index: parseInt(index), hand_layer: this.comp.layers[i + 1], anchor_layer: this.comp.layer(index + " :: ANCHOR_POINT") });
                }
            }
            hands.sort(function (a, b) {
                if (a.index > b.index) {
                    return 1;
                }
                else if (a.index < b.index) {
                    return -1;
                }
                else {
                    return 0;
                }
            });
            var maxWidth = 0;
            var maxHeight = 0;
            for (var i = 0; i < hands.length; i++) {
                if (maxWidth < hands[i].hand_layer.width) {
                    maxWidth = hands[i].hand_layer.width;
                }
                if (maxHeight < hands[i].hand_layer.height) {
                    maxHeight = hands[i].hand_layer.height;
                }
            }
            var handDelay = 3;
            for (var i = 0; i < hands.length; i++) {
                var playhead_1 = new Playhead(30);
                var currentHand = hands[i];
                for (var ii = 0; ii < hands.length; ii++) {
                    if (i == ii) {
                        hands[i].hand_layer.property("Opacity").setValueAtTime(playhead_1.getCurrentSecond(), 100);
                        hands[i].hand_layer.property("Opacity").setInterpolationTypeAtKey(hands[i].hand_layer.property("Opacity").numKeys, KeyframeInterpolationType.HOLD, KeyframeInterpolationType.HOLD);
                    }
                    else {
                        hands[i].hand_layer.property("Opacity").setValueAtTime(playhead_1.getCurrentSecond(), 0);
                        hands[i].hand_layer.property("Opacity").setInterpolationTypeAtKey(hands[i].hand_layer.property("Opacity").numKeys, KeyframeInterpolationType.HOLD, KeyframeInterpolationType.HOLD);
                    }
                    playhead_1.moveFrames(1);
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
                var _b = getLayerPoints(hands[i].anchor_layer, false, 0), anchor_top = _b[0], anchor_left = _b[1], anchor_right = _b[2], anchor_bottom = _b[3];
                var _c = [anchor_right - anchor_left, anchor_bottom - anchor_top], anchor_width = _c[0], anchor_height = _c[1];
                var _d = getLayerPoints(hands[i].hand_layer, false, 0), hand_top = _d[0], hand_left = _d[1], hand_right = _d[2], hand_bottom = _d[3];
                hands[i].anchor_layer.enabled = false;
                hands[i].hand_layer.property("Opacity").expression = "loopOut(\"cycle\")";
                hands[i].hand_layer.property("Anchor Point").setValue([anchor_left + (anchor_width / 2) - hand_left, anchor_top + (anchor_height / 2) - hand_top]);
                hands[i].hand_layer.property("Position").setValue([this.comp.width / 2, this.comp.height / 2]);
            }
        }
    };
    Hand.prototype.embedInComp = function (mainComp) {
        this.containerLayer = mainComp.layers.add(this.comp);
        this.containerLayer.name = this.name;
        return this.containerLayer;
    };
    Hand.prototype.setOutPoint = function (time) {
        if (this.comp.duration >= 9990 || this.comp.duration < time) {
            this.comp.duration = time;
            for (var i = 0; i < this.comp.layers.length; i++) {
                this.comp.layers[i + 1].outPoint = time;
            }
            this.containerLayer.outPoint = time;
        }
    };
    return Hand;
}());
