class Playhead {
    fps: number;
    protected currentFrame: number;

    constructor(fps: number) {
        this.fps = fps;
        this.currentFrame = 0;
    }

    getCurrentSecond() : number {
        return this.framesToSeconds(this.currentFrame);
    }

    getCurrentFrame() : number {
        return this.currentFrame;
    }

    moveSeconds(seconds: number) {
        this.currentFrame += this.secondsToFrames(seconds);
    }

    moveFrames(frames: number) {
        this.currentFrame += Math.round(frames);
    }

    framesToSeconds(frames: number) : number {
        return Math.round(frames) / this.fps;
    }

    secondsToFrames(seconds: number) : number {
        return seconds * this.fps;
    }
}