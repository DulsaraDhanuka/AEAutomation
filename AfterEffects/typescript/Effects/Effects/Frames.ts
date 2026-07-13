//@include "../../Playhead.js"
//@include "../Effect.js"
//@include "../../Element/Element.js"

class Frames extends Effect {
    getID(): string {
        return "frames";
    }

    applyElement(element: Element, startTime: number, properties: ElementPropertyGroup): number {
        return 0;
    }

    applyElementGroup(group: ElementGroup, startTime: number, properties: ElementPropertyGroup): number {
        let frameDelay: number = 5;
        if ((<ElementProperty>properties.get("frameDelay")) != null) {
            frameDelay = parseInt((<ElementProperty>properties.get("frameDelay")).getValue());
        }

        let animationPlayhead = new Playhead(group.getComp().frameRate);
        animationPlayhead.moveSeconds(startTime);

        group.sort(function(a: ElementGroup | Element, b: ElementGroup | Element) {
            let n1 = parseInt(a.getName());
            let n2 = parseInt(b.getName());

            return n1 - n2;
        });

        let prevElement: Element = null;
        group.iterate(function(element: Element, i: number) {
            (<Property>(<AVLayer>element.getLayer()).property("Opacity")).setValueAtTime(animationPlayhead.getCurrentSecond(), 0);
            if (prevElement) {
                (<Property>(<AVLayer>prevElement.getLayer()).property("Opacity")).setValueAtTime(animationPlayhead.getCurrentSecond(), 100);
            }
            animationPlayhead.moveFrames(1);
            (<Property>(<AVLayer>element.getLayer()).property("Opacity")).setValueAtTime(animationPlayhead.getCurrentSecond(), 100);
            if (prevElement) {
                (<Property>(<AVLayer>prevElement.getLayer()).property("Opacity")).setValueAtTime(animationPlayhead.getCurrentSecond(), 0);
            }
            animationPlayhead.moveFrames(frameDelay);
            prevElement = element;
        }, true);

        return animationPlayhead.getCurrentSecond()-startTime;
    }
}