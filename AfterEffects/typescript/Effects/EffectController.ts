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

class EffectController {
    protected effects: Array<Effect>;
    protected playhead: Playhead;

    constructor(playhead: Playhead) {
        this.effects = new Array<Effect>();
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

    applyEffect(element: Element | ElementGroup, effectName: string): void {
        let effect: Effect = null;
        for (var i = 0; i < this.effects.length; i++) {
            if (this.effects[i].getID() == effectName) {
                effect = this.effects[i];
            }
        }

        if (effect != null) {
            let animationDuration: number = effect.apply(element, this.playhead.getCurrentSecond(), element.getProperties());

            this.playhead.moveSeconds(animationDuration);
        }
    }
}