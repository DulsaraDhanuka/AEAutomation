var Playhead = /** @class */ (function () {
    function Playhead(fps) {
        this.fps = fps;
        this.currentFrame = 0;
    }
    Playhead.prototype.getCurrentSecond = function () {
        return this.framesToSeconds(this.currentFrame);
    };
    Playhead.prototype.getCurrentFrame = function () {
        return this.currentFrame;
    };
    Playhead.prototype.moveSeconds = function (seconds) {
        this.currentFrame += this.secondsToFrames(seconds);
    };
    Playhead.prototype.moveFrames = function (frames) {
        this.currentFrame += Math.round(frames);
    };
    Playhead.prototype.framesToSeconds = function (frames) {
        return Math.round(frames) / this.fps;
    };
    Playhead.prototype.secondsToFrames = function (seconds) {
        return seconds * this.fps;
    };
    return Playhead;
}());
