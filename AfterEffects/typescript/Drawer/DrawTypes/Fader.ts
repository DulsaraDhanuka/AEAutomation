//@include "../Drawer.js"
//@include "../../utils.js"
//@include "../../Playhead.js"

// TODO: Make redrawable
class Fader extends Drawer {

    fadeDurationFrames: number = 1;

    constructor(drawingHand: AVLayer, erasingHand: AVLayer) {
        super(drawingHand, erasingHand);

        this.fadeDurationFrames = 1;
    }

    drawElement(element: Element, playhead: Playhead): void {
        let elementComp: CompItem = element.getComp();

        var fadeDurationFrames = this.fadeDurationFrames;
        if ((<ElementProperty>element.getProperties().get("fadeDuration")) != null) {
            fadeDurationFrames = parseInt((<ElementProperty>element.getProperties().get("fadeDuration")).getValue());
        }
        var layer = element.getLayer();
        (<Property>layer.property("Opacity")).setValueAtTime(playhead.getCurrentSecond(), 0);
        (<Property>layer.property("Opacity")).setInterpolationTypeAtKey((<Property>layer.property("Opacity")).numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
        playhead.moveFrames(fadeDurationFrames);
        (<Property>layer.property("Opacity")).setValueAtTime(playhead.getCurrentSecond(), 100);
        (<Property>layer.property("Opacity")).setInterpolationTypeAtKey((<Property>layer.property("Opacity")).numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
    }
    
    drawGroup(group: ElementGroup, playhead: Playhead): void {
        group.sort(function (a: Element, b: Element): number {
            let a_int: number = parseInt(a.getName());
            let b_int: number = parseInt(b.getName());

            if (a_int > b_int) {
                return 1;
            } else if (a_int < b_int) {
                return -1;
            } else {
                return 0;
            }
        });

        var fadeDurationFrames = this.fadeDurationFrames;
        if ((<ElementProperty>group.getProperties().get("fadeDuration")) != null) {
            fadeDurationFrames = parseInt((<ElementProperty>group.getProperties().get("fadeDuration")).getValue());
        }
        group.iterate(function (element: Element) {
            let innerPlayhead = new Playhead(playhead.fps);
            innerPlayhead.moveFrames(playhead.getCurrentFrame());
            (<Property>element.getLayer().property("Opacity")).setValueAtTime(innerPlayhead.getCurrentSecond(), 0);
            (<Property>element.getLayer().property("Opacity")).setInterpolationTypeAtKey((<Property>element.getLayer().property("Opacity")).numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
            innerPlayhead.moveFrames(fadeDurationFrames);
            (<Property>element.getLayer().property("Opacity")).setValueAtTime(innerPlayhead.getCurrentSecond(), 100);
            (<Property>element.getLayer().property("Opacity")).setInterpolationTypeAtKey((<Property>element.getLayer().property("Opacity")).numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
        }, true);
        playhead.moveFrames(this.fadeDurationFrames);
    }

    eraseElement(element: Element, playhead: Playhead): void {
        let elementComp: CompItem = element.getComp();

        var fadeDurationFrames = this.fadeDurationFrames;
        if ((<ElementProperty>element.getProperties().get("fadeDuration")) != null) {
            fadeDurationFrames = parseInt((<ElementProperty>element.getProperties().get("fadeDuration")).getValue());
        }
        var layer = element.getLayer();
        (<Property>layer.property("Opacity")).setValueAtTime(playhead.getCurrentSecond(), 100);
        (<Property>layer.property("Opacity")).setInterpolationTypeAtKey((<Property>layer.property("Opacity")).numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
        playhead.moveFrames(fadeDurationFrames);
        (<Property>layer.property("Opacity")).setValueAtTime(playhead.getCurrentSecond(), 0);
        (<Property>layer.property("Opacity")).setInterpolationTypeAtKey((<Property>layer.property("Opacity")).numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
    }

    eraseGroup(group: ElementGroup, playhead: Playhead): void {
        group.sort(function (a: Element, b: Element): number {
            let a_int: number = parseInt(a.getName());
            let b_int: number = parseInt(b.getName());

            if (a_int > b_int) {
                return 1;
            } else if (a_int < b_int) {
                return -1;
            } else {
                return 0;
            }
        });

        var fadeDurationFrames = this.fadeDurationFrames;
        if ((<ElementProperty>group.getProperties().get("fadeDuration")) != null) {
            fadeDurationFrames = parseInt((<ElementProperty>group.getProperties().get("fadeDuration")).getValue());
        }
        group.iterate(function (element: Element) {
            let innerPlayhead = new Playhead(playhead.fps);
            innerPlayhead.moveFrames(playhead.getCurrentFrame());
            (<Property>element.getLayer().property("Opacity")).setValueAtTime(innerPlayhead.getCurrentSecond(), 100);
            (<Property>element.getLayer().property("Opacity")).setInterpolationTypeAtKey((<Property>element.getLayer().property("Opacity")).numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
            innerPlayhead.moveFrames(fadeDurationFrames);
            (<Property>element.getLayer().property("Opacity")).setValueAtTime(innerPlayhead.getCurrentSecond(), 0);
            (<Property>element.getLayer().property("Opacity")).setInterpolationTypeAtKey((<Property>element.getLayer().property("Opacity")).numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
        }, true);
        playhead.moveFrames(this.fadeDurationFrames);
    }

    condition(element: Element | ElementGroup, containerSize: [number, number]): boolean {
        return false;
    }

    getID(): string {
        return "fader";
    }
}