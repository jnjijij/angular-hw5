// app.component.ts
import { Component } from '@angular/core';

interface Car {
    make: string;
    year: number;
    price: number;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    carMake: string;
    carYear: number;
    carPrice: number;

    cars: Car[] = [];

    addCar(): void {
        if (this.carMake && this.carYear && this.carPrice) {
            const newCar: Car = {
                make: this.carMake,
                year: this.carYear,
                price: this.carPrice
            };

            this.cars.push(newCar);


            this.carMake = '';
            this.carYear = null;
            this.carPrice = null;
        }
    }
}
