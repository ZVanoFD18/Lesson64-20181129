namespace TestNamespace {
    //import {Car} from './Car';
    //import {CarBuilderInterface} from './CarBuilderInterface';

    export class CarDirector {
        protected builder: CarBuilderInterface;

        /**
         * Создает Директора и устанавливает Строителя.
         * @param builder
         */
        constructor(builder: CarBuilderInterface) {
            this.changeBuilder(builder);
        }

        /**
         * Смена текущего строителя
         * @param builder
         */
        changeBuilder(builder: CarBuilderInterface): void {
            this.builder = builder;
        }

        /**
         * Создает автомобиль используя текущего строителя
         */
        make(): Car {
            this.builder.reset();
            this.builder.setBrand();
            this.builder.setModel();
            this.builder.setDescription();
            this.builder.setDoor();
            this.builder.setPassanger();
            this.builder.setTrailer();
            return this.builder.getResult();
        }

        /**
         * Cоздает автомобиль марки ЛАЗ
         */
        makeLaz():Car{
            this.changeBuilder(new CarBuilderLaz());
            return this.make();
        }

        /**
         * Создает автомобиль марки КАМАЗ
         */
        makeKamaz():Car{
            this.changeBuilder(new CarBuilderKamaz());
            return this.make();
        }
    }
}