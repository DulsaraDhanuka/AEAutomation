//@include "./Element.js"
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Video = /** @class */ (function (_super) {
    __extends(Video, _super);
    function Video(layer, comp, name, rawName) {
        var _this = _super.call(this, layer, comp, name, rawName) || this;
        var filePath = _this.elementProperties.get("video").getValue();
        var videoFootage = importAsset(filePath, ImportAsType.FOOTAGE, layer.source.file.parent.toString());
        videoFootage.parentFolder = createFolder("VIDEOS");
        var videoComp = app.project.items.addComp(name, videoFootage.width, videoFootage.height, comp.pixelAspect, videoFootage.duration, videoFootage.frameRate);
        videoComp.parentFolder = createFolder("VIDEOS");
        var videoLayer = videoComp.layers.add(videoFootage);
        _this.videoFootage = videoFootage;
        _this.videoComp = videoComp;
        _this.videoLayer = videoLayer;
        if (_this.elementProperties.get("screenColor")) {
            var keylight = videoLayer.effect.addProperty("Keylight (1.2)");
            var rgb = hexToRgb(_this.elementProperties.get("screenColor").getValue());
            keylight.property("Screen Colour").setValue([rgb[0] / 255, rgb[1] / 255, rgb[2] / 255]);
        }
        var _a = getLayerPoints(layer, true, 0), top = _a[0], left = _a[1], right = _a[2], bottom = _a[3];
        var _b = [right - left, bottom - top], width = _b[0], height = _b[1];
        _this.layer.replaceSource(_this.videoComp, true);
        var _c = getLayerPoints(layer, true, 0), compTop = _c[0], compLeft = _c[1], compRight = _c[2], compBottom = _c[3];
        var _d = [compRight - compLeft, compBottom - compTop], compWidth = _d[0], compHeight = _d[1];
        _this.layer.property("Scale").setValue([width / compWidth * 100, height / compHeight * 100]);
        _this.layer.collapseTransformation = false;
        return _this;
    }
    Video.prototype.play = function (playhead) {
        this.videoLayer.timeRemapEnabled = true;
        this.videoLayer.timeRemap.removeKey(2);
        playhead.moveFrames(15);
        //this.layer.inPoint = playhead.getCurrentTime();
        this.videoLayer.timeRemap.setValueAtTime(playhead.getCurrentSecond(), 0);
        this.videoLayer.timeRemap.removeKey(this.videoLayer.timeRemap.nearestKeyIndex(0));
        var time = playhead.getCurrentSecond();
        time += this.videoFootage.duration;
        if (!(this.elementProperties.get("backgroundPlayback") && this.elementProperties.get("backgroundPlayback").getValue() == "true")) {
            playhead.moveSeconds(this.videoFootage.duration);
        }
        this.videoLayer.timeRemap.setValueAtTime(time, this.videoFootage.duration);
        if (this.elementProperties.get("loop") && this.elementProperties.get("loop").getValue() == "true") {
            for (var i = 0; i < 99; i++) {
                this.videoLayer.timeRemap.setValueAtTime(time, this.videoFootage.duration);
                this.videoLayer.timeRemap.setValueAtTime(time + playhead.framesToSeconds(1), 0);
                time += this.videoFootage.duration;
                this.videoLayer.timeRemap.setValueAtTime(time, this.videoFootage.duration);
            }
        }
    };
    Video.prototype.pause = function (playhead) {
        this.videoLayer.timeRemap.setValueAtTime(playhead.getCurrentSecond(), this.videoLayer.timeRemap.valueAtTime(playhead.getCurrentSecond(), true));
        var key = this.videoLayer.timeRemap.nearestKeyIndex(playhead.getCurrentSecond());
        for (var i = key + 1; i <= this.videoLayer.timeRemap.numKeys; i++) {
            this.videoLayer.timeRemap.removeKey(i);
        }
    };
    Video.prototype.setOutPoint = function (t) {
        this.videoComp.duration = t;
        this.videoLayer.outPoint = t;
    };
    return Video;
}(Element));
