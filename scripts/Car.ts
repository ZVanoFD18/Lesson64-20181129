namespace TestNamespace {
    /**
     * Базовый "жирный" класс "Автомобиль", для которого нужно наделать строителей.
     */
    export class Car {
        protected brand: string;
        protected model: string;
        protected description: string;
        protected nDoor: number;
        protected nPassager: number;
        protected nTrailer: number;

        constructor(brand: string = '', model: string = '', description: string = '') {
            this.brand = brand;
            this.model = model;
            this.description = description;
        }

        setBrand(value: string) {
            this.brand = value;
        }

        getBrand(): String {
            return this.brand;
        }

        setModel(value: string) {
            this.model = value;
        }

        getModel(): String {
            return this.model;
        }

        setDescription(value: string) {
            this.description = value;
        }

        setDoor(value: number) {
            this.nDoor = value;
        }

        setPassanger(value: number) {
            this.nPassager = value;
        }

        setTrailer(value: number) {
            this.nTrailer = value;
        }

        isTrailer(): boolean {
            return this.nTrailer > 0;
        }

        isBus(): boolean {
            return this.nPassager > 5;
        }
    }
}