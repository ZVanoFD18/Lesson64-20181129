var TestNamespace;
(function (TestNamespace) {
    //import {Car} from './Car';
    // import {CarBuilderInterface} from './CarBuilderInterface';
    var CarBuilderKamaz = /** @class */ (function () {
        function CarBuilderKamaz() {
        }
        CarBuilderKamaz.prototype.reset = function () {
            this.car = new Car();
        };
        CarBuilderKamaz.prototype.getResult = function () {
            return this.car;
        };
        CarBuilderKamaz.prototype.setBrand = function () {
            this.car.setBrand('ЗАЗ');
        };
        CarBuilderKamaz.prototype.setModel = function () {
            this.car.setModel('Горбатый');
        };
        CarBuilderKamaz.prototype.setDescription = function () {
            this.car.setDescription("\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C \u043C\u0430\u0440\u043A\u0438 " + this.car.getBrand() + " \u0438 \u043C\u043E\u0434\u0435\u043B\u0438 " + this.car.getModel());
        };
        CarBuilderKamaz.prototype.setDoor = function () {
            this.car.setDoor(2);
        };
        CarBuilderKamaz.prototype.setPassanger = function () {
            this.car.setPassanger(4);
        };
        CarBuilderKamaz.prototype.setTrailer = function () {
            this.car.setTrailer(0);
        };
        return CarBuilderKamaz;
    }());
    TestNamespace.CarBuilderKamaz = CarBuilderKamaz;
    ;
})(TestNamespace || (TestNamespace = {}));