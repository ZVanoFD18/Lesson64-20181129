namespace TestNamespace {
    //import {Car} from './Car';
    //import {CarBuilderInterface} from './CarBuilderInterface';

    export class CarBuilderVaz2101 implements CarBuilderInterface {
        car: Car;

        reset() {
            this.car = new Car();
        }

        getResult(): Car {
            return this.car;
        }


        setBrand() {
            this.car.setBrand('ВАЗ');
        }

        setModel() {
            this.car.setModel('2101');
        }

        setDescription() {
            this.car.setDescription(`Автомобиль марки ${this.car.getBrand()} и модели ${this.car.getModel()}`);
        }

        setDoor() {
            this.car.setDoor(4);
        }


        setPassanger() {
            this.car.setPassanger(4);
        }

        setTrailer() {
            this.car.setTrailer(0);
        }
    };
}