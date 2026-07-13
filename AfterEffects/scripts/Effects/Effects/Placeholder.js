//@include "../../Playhead.js"
//@include "../Effect.js"
//@include "../../Element/Element.js"
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
var Placeholder = /** @class */ (function (_super) {
    __extends(Placeholder, _super);
    function Placeholder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Placeholder.prototype.getID = function () {
        return "placeholder";
    };
    Placeholder.prototype.applyElementGroup = function (group, startTime, properties) {
        var animationDuration = 5;
        if (properties.get("animationDuration") != null) {
            animationDuration = parseInt(properties.get("animationDuration").getValue());
        }
        var playhead = new Playhead(group.getComp().frameRate);
        playhead.moveSeconds(startTime);
        playhead.moveFrames(animationDuration);
        return playhead.getCurrentSecond() - startTime;
    };
    return Placeholder;
}(Effect));
