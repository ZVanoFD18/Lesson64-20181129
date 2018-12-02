"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CarDirector_1 = require("./CarDirector");
var CarBuilderVaz2101_1 = require("./CarBuilderVaz2101");
var App = /** @class */ (function () {
    function App() {
    }
    App.run = function () {
        var carDirector = new CarDirector_1.CarDirector(new CarBuilderVaz2101_1.CarBuilderVaz2101);
        var car1 = carDirector.make();
        var car2 = carDirector.make();
        console.log({
            car1: car1,
            car2: car2
        });
    };
    return App;
}());
;
