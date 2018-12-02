"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car = /** @class */ (function () {
    function Car(brand, model, description) {
        if (brand === void 0) { brand = ''; }
        if (model === void 0) { model = ''; }
        if (description === void 0) { description = ''; }
        this.brand = brand;
        this.model = model;
        this.description = description;
    }
    Car.prototype.setBrand = function (value) {
        this.brand = value;
    };
    Car.prototype.getBrand = function () {
        return this.brand;
    };
    Car.prototype.setModel = function (value) {
        this.model = value;
    };
    Car.prototype.getModel = function () {
        return this.model;
    };
    Car.prototype.setDescription = function (value) {
        this.description = value;
    };
    Car.prototype.setDoor = function (value) {
        this.nDoor = value;
    };
    Car.prototype.setPassanger = function (value) {
        this.nPassager = value;
    };
    Car.prototype.setTrailer = function (value) {
        this.nTrailer = value;
    };
    Car.prototype.isTrailer = function () {
        return this.nTrailer > 0;
    };
    Car.prototype.isBus = function () {
        return this.nPassager > 5;
    };
    return Car;
}());
exports.Car = Car;
