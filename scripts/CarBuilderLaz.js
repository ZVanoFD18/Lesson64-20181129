var TestNamespace;
(function (TestNamespace) {
    //import {Car} from './Car';
    // import {CarBuilderInterface} from './CarBuilderInterface';
    var CarBuilderLaz = /** @class */ (function () {
        function CarBuilderLaz() {
        }
        CarBuilderLaz.prototype.reset = function () {
            this.car = new Car();
        };
        CarBuilderLaz.prototype.getResult = function () {
            return this.car;
        };
        CarBuilderLaz.prototype.setBrand = function () {
            this.car.setBrand('ЛАЗ');
        };
        CarBuilderLaz.prototype.setModel = function () {
            this.car.setModel('Тупоносый автобус');
        };
        CarBuilderLaz.prototype.setDescription = function () {
            this.car.setDescription("\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C \u043C\u0430\u0440\u043A\u0438 " + this.car.getBrand() + " \u0438 \u043C\u043E\u0434\u0435\u043B\u0438 " + this.car.getModel());
        };
        CarBuilderLaz.prototype.setDoor = function () {
            this.car.setDoor(3);
        };
        CarBuilderLaz.prototype.setPassanger = function () {
            this.car.setPassanger(50);
        };
        CarBuilderLaz.prototype.setTrailer = function () {
            this.car.setTrailer(0);
        };
        return CarBuilderLaz;
    }());
    TestNamespace.CarBuilderLaz = CarBuilderLaz;
    ;
})(TestNamespace || (TestNamespace = {}));
