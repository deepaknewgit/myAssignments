var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Browser = /** @class */ (function () {
    function Browser() {
        this.browserName = "Chrome";
        this.browserVerison = 45;
    }
    Browser.prototype.openUrl = function () {
        console.log("The Url is Opened");
    };
    Browser.prototype.closebrowser = function () {
        console.log("The Browser is closed");
    };
    Browser.prototype.navigateBack = function () {
        console.log("The Browser is navigated back");
    };
    return Browser;
}());
var chrome = /** @class */ (function (_super) {
    __extends(chrome, _super);
    function chrome() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    chrome.prototype.openIncognitoMode = function () {
        "Opened the Browser in Incoginto mode";
    };
    chrome.prototype.clearCache = function () {
        "cleared the cache";
    };
    return chrome;
}(Browser));
var edge = /** @class */ (function (_super) {
    __extends(edge, _super);
    function edge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    edge.prototype.takeSnapShot = function () {
        "Took screenshot";
    };
    edge.prototype.clearcookies = function () {
        "cleared the cookies";
    };
    return edge;
}(Browser));
var firefox = /** @class */ (function (_super) {
    __extends(firefox, _super);
    function firefox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    firefox.prototype.readMode = function () {
        "Opened the Browser in Incoginto mode";
    };
    firefox.prototype.fullScreenMode = function () {
        "Created the cache";
    };
    return firefox;
}(Browser));
function browserlaunch() {
    var obj1 = new Browser();
    obj1.browserName;
    obj1.browserVerison;
    obj1.openUrl;
}
