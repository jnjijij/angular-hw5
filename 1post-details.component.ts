import { Component } from '@angular/core';
import { CarService } from './car.service';
import { Car } from './car'; // Assuming you have a Car interface defined

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newCar = { make: '', year: 0, price: 0 };
  cars: Car[] = [];

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.carService.getAllCars().subscribe((cars) => (this.cars = cars));
  }

  addCar() {
    this.carService.addCar(this.newCar).subscribe((car) => {
      this.cars.push(car);
      this.newCar = { make: '', year: 0, price: 0 };
    });
  }
}
