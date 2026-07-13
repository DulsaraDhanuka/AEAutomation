//@include "./Element.js"

class Video extends Element {

    videoFootage: FootageItem;
    videoComp: CompItem;
    videoLayer: AVLayer;

    constructor(layer: AVLayer, comp: CompItem, name?: string, rawName?: string) {
        super(layer, comp, name, rawName);
        
        let filePath: string = (<ElementProperty>this.elementProperties.get("video")).getValue();
        let videoFootage: FootageItem = <FootageItem>importAsset(filePath, ImportAsType.FOOTAGE, layer.source.file.parent.toString());
        videoFootage.parentFolder = createFolder("VIDEOS");
        let videoComp: CompItem = app.project.items.addComp(name, videoFootage.width, videoFootage.height, comp.pixelAspect, videoFootage.duration, videoFootage.frameRate);
        videoComp.parentFolder = createFolder("VIDEOS");
        let videoLayer: AVLayer = videoComp.layers.add(videoFootage);

        this.videoFootage = videoFootage;
        this.videoComp = videoComp;
        this.videoLayer = videoLayer;

        if (this.elementProperties.get("screenColor")) {
            let keylight: PropertyGroup = <PropertyGroup>videoLayer.effect.addProperty("Keylight (1.2)");
            let rgb: [number, number, number] = hexToRgb((<ElementProperty>this.elementProperties.get("screenColor")).getValue());
            (<Property>keylight.property("Screen Colour")).setValue([rgb[0] / 255, rgb[1] / 255, rgb[2] / 255]);
        }

        let [top, left, right, bottom] = getLayerPoints(layer, true, 0);
        let [width, height] = [right - left, bottom - top];
        this.layer.replaceSource(this.videoComp, true);
        let [compTop, compLeft, compRight, compBottom] = getLayerPoints(layer, true, 0);
        let [compWidth, compHeight] = [compRight - compLeft, compBottom - compTop];
        (<Property>this.layer.property("Scale")).setValue([width / compWidth * 100, height / compHeight * 100]);
        this.layer.collapseTransformation = false;
    }

    play(playhead: Playhead): void {
        this.videoLayer.timeRemapEnabled = true;
        this.videoLayer.timeRemap.removeKey(2);
        playhead.moveFrames(15);
        //this.layer.inPoint = playhead.getCurrentTime();
        this.videoLayer.timeRemap.setValueAtTime(playhead.getCurrentSecond(), 0);
        this.videoLayer.timeRemap.removeKey(this.videoLayer.timeRemap.nearestKeyIndex(0));
        let time: number = playhead.getCurrentSecond();
        time += this.videoFootage.duration;
        if (!(this.elementProperties.get("backgroundPlayback") && (<ElementProperty>this.elementProperties.get("backgroundPlayback")).getValue() == "true")) {
            playhead.moveSeconds(this.videoFootage.duration);
        }
        this.videoLayer.timeRemap.setValueAtTime(time, this.videoFootage.duration);
        if (this.elementProperties.get("loop") && (<ElementProperty>this.elementProperties.get("loop")).getValue() == "true") {
            for (var i = 0; i < 99; i++) {
                this.videoLayer.timeRemap.setValueAtTime(time, this.videoFootage.duration);
                this.videoLayer.timeRemap.setValueAtTime(time + playhead.framesToSeconds(1), 0);
                time += this.videoFootage.duration;
                this.videoLayer.timeRemap.setValueAtTime(time, this.videoFootage.duration);
            }
        }
    }

    pause(playhead: Playhead) {
        this.videoLayer.timeRemap.setValueAtTime(playhead.getCurrentSecond(), this.videoLayer.timeRemap.valueAtTime(playhead.getCurrentSecond(), true));
        let key: number = this.videoLayer.timeRemap.nearestKeyIndex(playhead.getCurrentSecond());

        for (var i = key+1; i <= this.videoLayer.timeRemap.numKeys; i++) {
            this.videoLayer.timeRemap.removeKey(i);
        }
    }

    setOutPoint(t: number): void {
        this.videoComp.duration = t;
        this.videoLayer.outPoint = t;
    }
}