"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car_1 = require("./Car");
var CarBuilderVaz2101 = /** @class */ (function () {
    function CarBuilderVaz2101() {
    }
    CarBuilderVaz2101.prototype.reset = function () {
        this.car = new Car_1.Car();
    };
    CarBuilderVaz2101.prototype.getResult = function () {
        return this.car;
    };
    CarBuilderVaz2101.prototype.setBrand = function () {
        this.car.setBrand('ВАЗ');
    };
    CarBuilderVaz2101.prototype.setModel = function () {
        this.car.setModel('2101');
    };
    CarBuilderVaz2101.prototype.setDescription = function () {
        this.car.setDescription("\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C \u043C\u0430\u0440\u043A\u0438 " + this.car.getBrand() + " \u0438 \u043C\u043E\u0434\u0435\u043B\u0438 " + this.car.getBrand());
    };
    CarBuilderVaz2101.prototype.setDoor = function () {
        this.car.setDoor(4);
    };
    CarBuilderVaz2101.prototype.setPassanger = function () {
        this.car.setPassanger(4);
    };
    CarBuilderVaz2101.prototype.setTrailer = function () {
        this.car.setTrailer(0);
    };
    return CarBuilderVaz2101;
}());
exports.CarBuilderVaz2101 = CarBuilderVaz2101;
;
