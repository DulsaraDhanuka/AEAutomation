//@include "./utils.js"
var CameraController = /** @class */ (function () {
    function CameraController(camera) {
        this.camera = camera;
        this.defaultZoom = this.camera.property("Camera Options").property("Zoom").value;
        this.cameraDefaultZ = this.camera.property("Transform").property("Position").value[2];
    }
    CameraController.prototype.viewElement = function (element, time, offset) {
        if (offset === void 0) { offset = 0; }
        for (var i = 0; i < element.getComp().layers.length; i++) {
            var layer = element.getComp().layers[i + 1];
            layer.selected = false;
        }
        if (isType(element, Element)) {
            element.getLayer().selected = true;
        }
        else if (isType(element, ElementGroup)) {
            element.iterate(function (ele) {
                ele.getLayer().selected = true;
            }, true);
        }
        var compViewer = element.getComp().openInViewer();
        compViewer.setActive();
        element.getComp().time = time;
        app.executeCommand(2834);
        app.executeCommand(app.findMenuCommandId("Close"));
        for (var i = 0; i < element.getComp().layers.length; i++) {
            var layer = element.getComp().layers[i + 1];
            layer.selected = false;
        }
        if (time) {
            this.camera.property("Position").addKey(time);
            this.camera.property("Position").setInterpolationTypeAtKey(this.camera.property("Position").numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
        }
    };
    CameraController.prototype.pauseMovement = function (time) {
        var prevCameraPos = this.camera.property("Position").value;
        if (this.camera.property("Position").numKeys > 0) {
            prevCameraPos = this.camera.property("Position").keyValue(this.camera.property("Position").numKeys);
        }
        this.camera.property("Position").setValueAtTime(time, prevCameraPos);
        this.camera.property("Position").setInterpolationTypeAtKey(this.camera.property("Position").numKeys, KeyframeInterpolationType.LINEAR, KeyframeInterpolationType.LINEAR);
    };
    CameraController.prototype.easeMovements = function () {
        /*let easeIn = new KeyframeEase(0, 33.33333);
        let easeOut = new KeyframeEase(0, 33.33333);

        for (var i = 0; i < (<Property>this.camera.property("Position")).numKeys; i++) {
            (<Property>this.camera.property("Position")).setInterpolationTypeAtKey(i + 1, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
            (<Property>this.camera.property("Position")).setTemporalEaseAtKey(i + 1, [easeIn], [easeOut]);
        }*/
    };
    return CameraController;
}());
