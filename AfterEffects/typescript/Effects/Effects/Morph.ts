//@include "../../Playhead.js"
//@include "../Effect.js"
//@include "../../Element/Element.js"

class Morph extends Effect {
    getID(): string {
        return "morph";
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

        let positions: [number, number, number][] = [];
        let layers: AVLayer[] = [];
        group.iterate(function(element: Element, i: number) {
            positions.push(<[number, number, number]>(<Property>element.getLayer().property("Position")).value);
            layers.push(element.getLayer());
            (<Property>element.getLayer().property("Position")).setValueAtTime(animationPlayhead.getCurrentSecond(), positions[0]);
        }, true);

        let morphPoint: number = null;
        if ((<ElementProperty>properties.get("morphPoint")) != null) {
            let morphPointhProp: string = (<ElementProperty>properties.get("morphPoint")).getValue();

            if (morphPointhProp == "false") {
                morphPoint = null;
            } else {
                morphPoint = parseInt(morphPointhProp.replace("%", ""));
            }
        }

        let speed: number = 50;
        if ((<ElementProperty>properties.get("morphSpeed")) != null) {
            let speedProp: string = (<ElementProperty>properties.get("morphSpeed")).getValue();
            speed = parseFloat(speedProp);
        }

        for (var i = 1; i < positions.length; i++) {
            let animationDurationFrames: number = 5 * Math.abs(this.getDistance(positions[i-1], positions[i])) / speed;
            let animationDuration: number = animationPlayhead.framesToSeconds(animationDurationFrames);
            
            for (var ii = 0; ii < layers.length; ii++) {
                (<Property>layers[ii].property("Position")).setValueAtTime(animationPlayhead.getCurrentSecond(), positions[i-1]);
            }
            
            if (morphPoint != null) {
                let layerMorphTime: number = animationPlayhead.getCurrentSecond()+(animationDuration / 100 * morphPoint);
                (<Property>layers[i-1].property("Opacity")).setValueAtTime(layerMorphTime, 100);
                (<Property>layers[i].property("Opacity")).setValueAtTime(layerMorphTime, 0);            
                (<Property>layers[i-1].property("Opacity")).setValueAtTime(layerMorphTime+animationPlayhead.framesToSeconds(1), 0);
                (<Property>layers[i].property("Opacity")).setValueAtTime(layerMorphTime+animationPlayhead.framesToSeconds(1), 100);
            } else {
                (<Property>layers[i].property("Opacity")).setValueAtTime(animationPlayhead.getCurrentSecond(), 0);
            }

            animationPlayhead.moveSeconds(animationDuration);
            
            for (var ii = 0; ii < layers.length; ii++) {
                (<Property>layers[ii].property("Position")).setValueAtTime(animationPlayhead.getCurrentSecond(), positions[i]);
            }
        }

        return animationPlayhead.getCurrentSecond()-startTime;
    }

    getDistance(p1: [number, number, number], p2: [number, number, number]): number {
        var a = p2[0] - p1[0];
        var b = p2[1] - p1[1];
        var c = p2[2] - p1[2];
    
        return Math.sqrt(a * a + b * b + c * c);
    }
}