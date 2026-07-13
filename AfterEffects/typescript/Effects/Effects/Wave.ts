//@include "../../Playhead.js"
//@include "../Effect.js"
//@include "../../Element/Element.js"

class Wave extends Effect {
    getID(): string {
        return "wave";
    }

    applyElement(element: Element, startTime: number, properties: ElementPropertyGroup): number {
        let animationPlayhead: Playhead = new Playhead(element.getComp().frameRate);
        animationPlayhead.moveSeconds(startTime);

        let waveAmount: number = 10;
        if ((<ElementProperty>properties.get("waveAmount")) != null) {
            waveAmount = parseFloat((<ElementProperty>properties.get("waveAmount")).getValue());
        }
        let nRipples: number = 1;
        if ((<ElementProperty>properties.get("nRipples")) != null) {
            nRipples = parseInt((<ElementProperty>properties.get("nRipples")).getValue());
        }
        let waveSpeed: number = 1;
        if ((<ElementProperty>properties.get("waveSpeed")) != null) {
            waveSpeed = parseFloat((<ElementProperty>properties.get("waveSpeed")).getValue());
        }
        let direction: string = "left";
        if ((<ElementProperty>properties.get("waveDirection")) != null) {
            direction = (<ElementProperty>properties.get("waveDirection")).getValue();
        }

        let layer: AVLayer = element.getLayer();
        let layerIndex: number = layer.index;
        let preComp: CompItem = (<CompItem>element.getComp()).layers.precompose([layerIndex], layer.name, false);
        element.setLayer(<AVLayer>(<CompItem>element.getComp()).layers[layerIndex]);
        layer = element.getLayer();
        layer.collapseTransformation = false;
        layer.threeDLayer = true;
        let [top, left, right, bottom] = getLayerPoints(layer, true, startTime);
        let [width, height] = [right-left, bottom-top];

        let waveHeight: number = waveAmount;
        let waveWidth: number = waveAmount;

        let waveDirection: number = 0;
        let pinEdge: number = 0;
        let pos: [number, number] = [0, 0];
        switch (direction) {
            case "left":
                waveDirection = -90;
                pinEdge = 7;
                waveHeight = waveAmount;
                waveWidth = width / nRipples;
                preComp.height = preComp.height + waveHeight * 2;
                pos = <[number, number]>(<Property>preComp.layers[1].property("Position")).value;
                (<Property>preComp.layers[1].property("Position")).setValue([pos[0], pos[1] + waveHeight]);
                break;
            case "right":
                waveDirection = 90;
                pinEdge = 5;
                waveHeight = waveAmount;
                waveWidth = width / nRipples;
                preComp.height = preComp.height + waveHeight * 2;
                pos = <[number, number]>(<Property>preComp.layers[1].property("Position")).value;
                (<Property>preComp.layers[1].property("Position")).setValue([pos[0], pos[1] + waveHeight]);
                break;
            case "top":
                waveDirection = 0;
                pinEdge = 8;
                waveHeight = height / nRipples;
                waveWidth = waveAmount;
                preComp.width = preComp.width + waveWidth * 2;
                pos = <[number, number]>(<Property>preComp.layers[1].property("Position")).value;
                (<Property>preComp.layers[1].property("Position")).setValue([pos[0] + waveWidth, pos[1]]);
                break;
            case "bottom":
                waveDirection = 180;
                pinEdge = 6;
                waveHeight = height / nRipples;
                waveWidth = waveAmount;
                preComp.width = preComp.width + waveWidth * 2;
                pos = <[number, number]>(<Property>preComp.layers[1].property("Position")).value;
                (<Property>preComp.layers[1].property("Position")).setValue([pos[0] + waveWidth, pos[1]]);
                break;
            default:
                waveDirection = 90;
                pinEdge = 5;
                waveHeight = waveAmount;
                waveWidth = width / nRipples;
                preComp.height = preComp.height + waveHeight * 2;
                pos = <[number, number]>(<Property>preComp.layers[1].property("Position")).value;
                (<Property>preComp.layers[1].property("Position")).setValue([pos[0], pos[1] + waveHeight]);
                break;
        }

        //let boundsEffect: PropertyGroup = <PropertyGroup>(<PropertyGroup>layer.property("Effects")).addProperty("ADBE GROW BOUNDS");
        let warpEffect: PropertyGroup = <PropertyGroup>(<PropertyGroup>layer.property("Effects")).addProperty("ADBE Wave Warp");
        //boundsEffect = <PropertyGroup>(layer.property("Effects").property("ADBE GROW BOUNDS"));

        //(<Property>boundsEffect.property("Pixels")).setValue(waveHeight);

        (<Property>warpEffect.property("Wave Height")).setValue(waveHeight);
        (<Property>warpEffect.property("Wave Width")).setValue(waveWidth);
        (<Property>warpEffect.property("Wave Speed")).setValue(waveSpeed);

        (<Property>warpEffect.property("Direction")).setValue(waveDirection);
        (<Property>warpEffect.property("Pinning")).setValue(pinEdge);

        (<Property>warpEffect.property("Antialiasing (Best Quality)")).setValue(3);

        (<Property>warpEffect.property("Wave Speed")).setValue(0);
        animationPlayhead.moveFrames(1);
        (<Property>warpEffect.property("Wave Speed")).setValue(waveSpeed);

        return 0;
    }

    applyElementGroup(group: ElementGroup, startTime: number, properties: ElementPropertyGroup): number {
        return 0;
    }

    pauseElement(element: Element, time: number, properties: ElementPropertyGroup): void {}
    pauseElementGroup(element: ElementGroup, time: number, properties: ElementPropertyGroup): void {}
}