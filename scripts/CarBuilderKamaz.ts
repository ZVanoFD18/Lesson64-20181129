namespace TestNamespace {
    //import {Car} from './Car';
    // import {CarBuilderInterface} from './CarBuilderInterface';

    export class CarBuilderKamaz implements CarBuilderInterface {
        car: Car;

        reset() {
            this.car = new Car();
        }

        getResult(): Car {
            return this.car;
        }


        setBrand() {
            this.car.setBrand('КАМАЗ');
        }

        setModel() {
            this.car.setModel('С прицепом');
        }

        setDescription() {
            this.car.setDescription(`Автомобиль марки ${this.car.getBrand()} и модели ${this.car.getModel()}`);
        }

        setDoor() {
            this.car.setDoor(2);
        }


        setPassanger() {
            this.car.setPassanger(3);
        }

        setTrailer() {
            this.car.setTrailer(1);
        }
    };
}