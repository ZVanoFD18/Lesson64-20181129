namespace TestNamespace {
    //import {Car} from './Car';
    // import {CarBuilderInterface} from './CarBuilderInterface';

    export class CarBuilderZaz implements CarBuilderInterface {
        car: Car;

        reset() {
            this.car = new Car();
        }

        getResult(): Car {
            return this.car;
        }


        setBrand() {
            this.car.setBrand('ЗАЗ');
        }

        setModel() {
            this.car.setModel('Горбатый');
        }

        setDescription() {
            this.car.setDescription(`Автомобиль марки ${this.car.getBrand()} и модели ${this.car.getModel()}`);
        }

        setDoor() {
            this.car.setDoor(2);
        }


        setPassanger() {
            this.car.setPassanger(4);
        }

        setTrailer() {
            this.car.setTrailer(0);
        }
    };
}