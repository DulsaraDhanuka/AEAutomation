//@include "../../Playhead.js"
//@include "../Effect.js"
//@include "../../Element/Element.js"

class Placeholder extends Effect {
    getID(): string {
        return "placeholder";
    }

    applyElementGroup(group: ElementGroup, startTime: number, properties: ElementPropertyGroup): number {
        let animationDuration: number = 5;
        if ((<ElementProperty>properties.get("animationDuration")) != null) {
            animationDuration = parseInt((<ElementProperty>properties.get("animationDuration")).getValue());
        }

        let playhead: Playhead = new Playhead(group.getComp().frameRate);
        playhead.moveSeconds(startTime);

        playhead.moveFrames(animationDuration);

        return playhead.getCurrentSecond()-startTime;
    }
}