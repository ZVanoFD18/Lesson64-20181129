
namespace TestNamespace {
    // import {CarDirector} from './CarDirector';
    // import {CarBuilderVaz2101} from './CarBuilderVaz2101';

    export class App {
        static run() {
            let carDirector = new CarDirector(new CarBuilderVaz2101);
            let cars:Car[] = new Array();
            cars.push(carDirector.make());
            cars.push(carDirector.make());
            carDirector.changeBuilder(new CarBuilderZaz())
            cars.push(carDirector.make());
            cars.push(carDirector.makeLaz());
            cars.push(carDirector.make());
            cars.push(carDirector.makeKamaz());
            cars.push(carDirector.make());
            cars.push(carDirector.make());
            console.log('Директор выдал автомобили:', cars);
        }
    }
}