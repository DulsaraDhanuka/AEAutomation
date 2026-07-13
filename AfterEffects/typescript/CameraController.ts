//@include "./utils.js"

class CameraController {
    camera: CameraLayer;
    defaultZoom: number;
    cameraDefaultZ: number;

    constructor(camera: CameraLayer) {
        this.camera = camera;
        this.defaultZoom = <number>(<Property>this.camera.property("Camera Options").property("Zoom")).value;
        this.cameraDefaultZ = <number>(<Property>this.camera.property("Transform").property("Position")).value[2];
    }

    viewElement(element: Element | ElementGroup, time?: number, offset: number = 0): void {
        
        for (var i = 0; i < element.getComp().layers.length; i++) {
            var layer = element.getComp().layers[i+1];
            layer.selected = false;
        }
        
        if (isType(element, Element)) {
            (<AVLayer>(<Element>element).getLayer()).selected = true;
        } else if (isType(element, ElementGroup)) {
            (<ElementGroup>element).iterate(function(ele: Element) {
                (<AVLayer>(<Element>ele).getLayer()).selected = true;
            }, true);
        }

        var compViewer = element.getComp().openInViewer();
        compViewer.setActive();
        element.getComp().time = time;
        app.executeCommand(2834);
        
        app.executeCommand(app.findMenuCommandId("Close"));
        
        for (var i = 0; i < element.getComp().layers.length; i++) {
            var layer = element.getComp().layers[i+1];
            layer.selected = false;
        }

        if (time) {
            (<Property>this.camera.property("Position")).addKey(time);
            (<Property>this.camera.property("Position")).setInterpolationTypeAtKey((<Property>this.camera.property("Position")).numKeys, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
        }
    }

    pauseMovement(time) {
        let prevCameraPos = (<Property> this.camera.property("Position")).value;
        if ((<Property> this.camera.property("Position")).numKeys > 0) {
            prevCameraPos = (<Property> this.camera.property("Position")).keyValue((<Property> this.camera.property("Position")).numKeys);
        }
        (<Property> this.camera.property("Position")).setValueAtTime(time, prevCameraPos);
        (<Property> this.camera.property("Position")).setInterpolationTypeAtKey((<Property> this.camera.property("Position")).numKeys, KeyframeInterpolationType.LINEAR, KeyframeInterpolationType.LINEAR);
    }

    easeMovements() {
        /*let easeIn = new KeyframeEase(0, 33.33333);
        let easeOut = new KeyframeEase(0, 33.33333);

        for (var i = 0; i < (<Property>this.camera.property("Position")).numKeys; i++) {
            (<Property>this.camera.property("Position")).setInterpolationTypeAtKey(i + 1, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
            (<Property>this.camera.property("Position")).setTemporalEaseAtKey(i + 1, [easeIn], [easeOut]);
        }*/
    }
}