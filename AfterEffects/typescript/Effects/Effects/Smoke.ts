//@include "../../Playhead.js"
//@include "../Effect.js"
//@include "../../Element/Element.js"

class Smoke extends Effect {
    getID(): string {
        return "smoke";
    }

    applyElement(element: Element, startTime: number, properties: ElementPropertyGroup): number {
        let layer: AVLayer = element.getLayer();
        let animationPlayhead = new Playhead(element.getComp().frameRate);
        animationPlayhead.moveSeconds(startTime);
        let [layerTop, layerLeft, layerRight, layerBottom]: [number, number, number, number] = getLayerPoints(element.getLayer(), true, animationPlayhead.getCurrentSecond());
        let [layerWidth, layerHeight]: [number, number] = [(layerRight - layerLeft), (layerBottom - layerTop)];
        
        let particleLayer: AVLayer = (<CompItem>element.getComp()).layers.addSolid([255, 255, 255], layer.name + " :: SMOKE_PARTICLES", element.getComp().width, element.getComp().height, element.getComp().pixelAspect, element.getComp().duration);
        particleLayer.threeDLayer = true;
        (<Property>particleLayer.property("Position")).setValue([layerLeft + layerWidth / 2, layerTop + layerHeight / 2, (<Property>layer.property("Position")).valueAtTime(animationPlayhead.getCurrentSecond(), false)[2]]);
        particleLayer.moveBefore(layer);
        layer.enabled = false;

        let [pLayerTop, pLayerLeft, pLayerRight, pLayerBottom]: [number, number, number, number] = getLayerPoints(particleLayer, true, animationPlayhead.getCurrentSecond());
        let [pLayerWidth, pLayerHeight]: [number, number] = [(pLayerRight - pLayerLeft), (pLayerBottom - pLayerTop)];
        (<Property>particleLayer.property("Scale")).setValue([layerWidth / pLayerWidth * 100, layerHeight / pLayerHeight * 100, 100]);

        let effects: PropertyGroup = <PropertyGroup>particleLayer.property("Effects");
        effects.addProperty("CC Mr. Mercury");
        effects.addProperty("ADBE Threshold2");
        effects.addProperty("CC Vector Blur");
        effects.addProperty("ADBE Tint");

        let mrMercury: PropertyGroup = <PropertyGroup>effects.property("CC Mr. Mercury");
        let threshold: PropertyGroup = <PropertyGroup>effects.property("ADBE Threshold2");
        let vecBlur: PropertyGroup = <PropertyGroup>effects.property("CC Vector Blur");
        let tint: PropertyGroup = <PropertyGroup>effects.property("ADBE Tint");

        (<Property>mrMercury.property("Velocity")).setValue(5);
        (<Property>mrMercury.property("Longevity (sec)")).setValue(1.5);
        (<Property>mrMercury.property("Gravity")).setValue(0);
        (<Property>mrMercury.property("Resistance")).setValue(2.10);
        (<Property>mrMercury.property("Extra")).setValue(1);
        (<Property>mrMercury.property("Animation")).setValue(10);
        (<Property>mrMercury.property("Blob Birth Size")).setValue(0.70);
        (<Property>mrMercury.property("Blob Death Size")).setValue(0.10);

        (<Property>mrMercury.property("Ambient")).setValue(0);
        (<Property>mrMercury.property("Diffuse")).setValue(23);
        (<Property>mrMercury.property("Specular")).setValue(100);
        (<Property>mrMercury.property("Roughness")).setValue(0.145);
        (<Property>mrMercury.property("Metal")).setValue(90);
        (<Property>mrMercury.property("Material Opacity")).setValue(100);

        (<Property>threshold.property("Level")).setValue(0.59607843137255);

        (<Property>vecBlur.property("Type")).setValue(3);
        (<Property>vecBlur.property("Amount")).setValue(15);
        
        (<Property>tint.property("Map Black To")).setValue([0.12156862765551,0.12156862765551,0.12156862765551,1]);
        (<Property>tint.property("Map White To")).setValue([0.29803922772408,0.29803922772408,0.29803922772408,1]);

        (<Property>mrMercury.property("Birth Rate")).setValueAtTime(animationPlayhead.getCurrentSecond(), 5);
        animationPlayhead.moveFrames(15);
        (<Property>mrMercury.property("Birth Rate")).setValueAtTime(animationPlayhead.getCurrentSecond(), 0);


        return animationPlayhead.getCurrentSecond()-startTime;
    }

    applyElementGroup(group: ElementGroup, startTime: number, properties: ElementPropertyGroup): number {
        return 0;
    }
}