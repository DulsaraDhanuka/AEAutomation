//@include "../Playhead.js"
//@include "./Effects/Wiggle.js"
//@include "./Effects/Fall.js"
//@include "./Effects/Zoom.js"
//@include "./Effects/Frames.js"
//@include "./Effects/Morph.js"
//@include "./Effects/Smoke.js"
//@include "./Effects/Spin.js"
//@include "./Effects/Wave.js"
//@include "./Effects/Placeholder.js"
var EffectController = /** @class */ (function () {
    function EffectController(playhead) {
        this.effects = new Array();
        this.playhead = playhead;
        this.effects.push(new Wiggle());
        this.effects.push(new Fall());
        this.effects.push(new Zoom());
        this.effects.push(new Frames());
        this.effects.push(new Morph());
        this.effects.push(new Smoke());
        this.effects.push(new Spin());
        this.effects.push(new Wave());
        this.effects.push(new Placeholder());
    }
    EffectController.prototype.applyEffect = function (element, effectName) {
        var effect = null;
        for (var i = 0; i < this.effects.length; i++) {
            if (this.effects[i].getID() == effectName) {
                effect = this.effects[i];
            }
        }
        if (effect != null) {
            var animationDuration = effect.apply(element, this.playhead.getCurrentSecond(), element.getProperties());
            this.playhead.moveSeconds(animationDuration);
        }
    };
    return EffectController;
}());
