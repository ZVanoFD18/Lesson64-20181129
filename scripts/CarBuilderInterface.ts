namespace TestNamespace {
    // import {Car} from './Car';
    /**
     * Базовый интерфейс классов-строителей.
     * Директор знает только об интерфейсных методах.
     */
    export interface CarBuilderInterface {
        car: Car;

        reset();

        getResult(): Car;

        setBrand();

        setModel();

        setDescription();

        setDoor();

        setPassanger();

        setTrailer();
    }
}