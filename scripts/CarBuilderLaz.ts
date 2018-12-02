namespace TestNamespace {
    //import {Car} from './Car';
    // import {CarBuilderInterface} from './CarBuilderInterface';

    export class CarBuilderLaz implements CarBuilderInterface {
        car: Car;

        reset() {
            this.car = new Car();
        }

        getResult(): Car {
            return this.car;
        }


        setBrand() {
            this.car.setBrand('ЛАЗ');
        }

        setModel() {
            this.car.setModel('Тупоносый автобус');
        }

        setDescription() {
            this.car.setDescription(`Автомобиль марки ${this.car.getBrand()} и модели ${this.car.getModel()}`);
        }

        setDoor() {
            this.car.setDoor(3);
        }


        setPassanger() {
            this.car.setPassanger(50);
        }

        setTrailer() {
            this.car.setTrailer(0);
        }
    };
}