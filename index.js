var TestNamespace;
(function (TestNamespace) {
    /**
     * Базовый "жирный" класс "Автомобиль", для которого нужно наделать строителей.
     */
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
    TestNamespace.Car = Car;
})(TestNamespace || (TestNamespace = {}));
var TestNamespace;
(function (TestNamespace) {
    //import {Car} from './Car';
    //import {CarBuilderInterface} from './CarBuilderInterface';
    var CarBuilderVaz2101 = /** @class */ (function () {
        function CarBuilderVaz2101() {
        }
        CarBuilderVaz2101.prototype.reset = function () {
            this.car = new TestNamespace.Car();
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
            this.car.setDescription("\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C \u043C\u0430\u0440\u043A\u0438 " + this.car.getBrand() + " \u0438 \u043C\u043E\u0434\u0435\u043B\u0438 " + this.car.getModel());
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
    TestNamespace.CarBuilderVaz2101 = CarBuilderVaz2101;
    ;
})(TestNamespace || (TestNamespace = {}));
var TestNamespace;
(function (TestNamespace) {
    //import {Car} from './Car';
    // import {CarBuilderInterface} from './CarBuilderInterface';
    var CarBuilderZaz = /** @class */ (function () {
        function CarBuilderZaz() {
        }
        CarBuilderZaz.prototype.reset = function () {
            this.car = new TestNamespace.Car();
        };
        CarBuilderZaz.prototype.getResult = function () {
            return this.car;
        };
        CarBuilderZaz.prototype.setBrand = function () {
            this.car.setBrand('ЗАЗ');
        };
        CarBuilderZaz.prototype.setModel = function () {
            this.car.setModel('Горбатый');
        };
        CarBuilderZaz.prototype.setDescription = function () {
            this.car.setDescription("\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C \u043C\u0430\u0440\u043A\u0438 " + this.car.getBrand() + " \u0438 \u043C\u043E\u0434\u0435\u043B\u0438 " + this.car.getModel());
        };
        CarBuilderZaz.prototype.setDoor = function () {
            this.car.setDoor(2);
        };
        CarBuilderZaz.prototype.setPassanger = function () {
            this.car.setPassanger(4);
        };
        CarBuilderZaz.prototype.setTrailer = function () {
            this.car.setTrailer(0);
        };
        return CarBuilderZaz;
    }());
    TestNamespace.CarBuilderZaz = CarBuilderZaz;
    ;
})(TestNamespace || (TestNamespace = {}));
var TestNamespace;
(function (TestNamespace) {
    //import {Car} from './Car';
    // import {CarBuilderInterface} from './CarBuilderInterface';
    var CarBuilderLaz = /** @class */ (function () {
        function CarBuilderLaz() {
        }
        CarBuilderLaz.prototype.reset = function () {
            this.car = new TestNamespace.Car();
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
var TestNamespace;
(function (TestNamespace) {
    //import {Car} from './Car';
    // import {CarBuilderInterface} from './CarBuilderInterface';
    var CarBuilderKamaz = /** @class */ (function () {
        function CarBuilderKamaz() {
        }
        CarBuilderKamaz.prototype.reset = function () {
            this.car = new TestNamespace.Car();
        };
        CarBuilderKamaz.prototype.getResult = function () {
            return this.car;
        };
        CarBuilderKamaz.prototype.setBrand = function () {
            this.car.setBrand('КАМАЗ');
        };
        CarBuilderKamaz.prototype.setModel = function () {
            this.car.setModel('С прицепом');
        };
        CarBuilderKamaz.prototype.setDescription = function () {
            this.car.setDescription("\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C \u043C\u0430\u0440\u043A\u0438 " + this.car.getBrand() + " \u0438 \u043C\u043E\u0434\u0435\u043B\u0438 " + this.car.getModel());
        };
        CarBuilderKamaz.prototype.setDoor = function () {
            this.car.setDoor(2);
        };
        CarBuilderKamaz.prototype.setPassanger = function () {
            this.car.setPassanger(3);
        };
        CarBuilderKamaz.prototype.setTrailer = function () {
            this.car.setTrailer(1);
        };
        return CarBuilderKamaz;
    }());
    TestNamespace.CarBuilderKamaz = CarBuilderKamaz;
    ;
})(TestNamespace || (TestNamespace = {}));
var TestNamespace;
(function (TestNamespace) {
    // import {CarDirector} from './CarDirector';
    // import {CarBuilderVaz2101} from './CarBuilderVaz2101';
    var App = /** @class */ (function () {
        function App() {
        }
        App.run = function () {
            var carDirector = new TestNamespace.CarDirector(new TestNamespace.CarBuilderVaz2101);
            var cars = new Array();
            cars.push(carDirector.make());
            cars.push(carDirector.make());
            carDirector.changeBuilder(new TestNamespace.CarBuilderZaz());
            cars.push(carDirector.make());
            cars.push(carDirector.makeLaz());
            cars.push(carDirector.make());
            cars.push(carDirector.makeKamaz());
            cars.push(carDirector.make());
            cars.push(carDirector.make());
            console.log('Директор выдал автомобили:', cars);
        };
        return App;
    }());
    TestNamespace.App = App;
})(TestNamespace || (TestNamespace = {}));
var TestNamespace;
(function (TestNamespace) {
    //import {Car} from './Car';
    //import {CarBuilderInterface} from './CarBuilderInterface';
    var CarDirector = /** @class */ (function () {
        /**
         * Создает Директора и устанавливает Строителя.
         * @param builder
         */
        function CarDirector(builder) {
            this.changeBuilder(builder);
        }
        /**
         * Смена текущего строителя
         * @param builder
         */
        CarDirector.prototype.changeBuilder = function (builder) {
            this.builder = builder;
        };
        /**
         * Создает автомобиль используя текущего строителя
         */
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
        /**
         * Cоздает автомобиль марки ЛАЗ
         */
        CarDirector.prototype.makeLaz = function () {
            this.changeBuilder(new TestNamespace.CarBuilderLaz());
            return this.make();
        };
        /**
         * Создает автомобиль марки КАМАЗ
         */
        CarDirector.prototype.makeKamaz = function () {
            this.changeBuilder(new TestNamespace.CarBuilderKamaz());
            return this.make();
        };
        return CarDirector;
    }());
    TestNamespace.CarDirector = CarDirector;
})(TestNamespace || (TestNamespace = {}));
