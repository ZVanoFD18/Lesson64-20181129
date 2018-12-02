"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CarDirector = /** @class */ (function () {
    function CarDirector(builder) {
        this.builder = builder;
    }
    CarDirector.prototype.changeBuilder = function (builder) {
        this.builder = builder;
    };
    CarDirector.prototype.make = function () {
        this.builder.reset();
        this.builder.setBrand();
        this.builder.setModel();
        this.builder.setDescription();
        this.builder.setDoor();
        this.builder.setPassanger();
        this.builder.setTrailer();
        return this.builder.getResult();
    };
    return CarDirector;
}());
exports.CarDirector = CarDirector;
