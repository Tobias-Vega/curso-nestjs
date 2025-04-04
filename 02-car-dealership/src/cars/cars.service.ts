import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v7 as uuidv7 } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {

  private cars: Car[] = [
    // {
    //   id: uuidv7(),
    //   brand: 'Toyota',
    //   model: 'Corolla'
    // },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {

    const car = this.cars.find(car => car.id === id);

    if (!car) throw new NotFoundException(`Car with id ${id} not found`);

    return car;
  }

  create(createCarDto: CreateCarDto) {

    const newCar: Car = {
      id: uuidv7(),
      ...createCarDto
    }

    this.cars.push(newCar);

    return newCar;
  }

  update(id: string, updateCarDto: UpdateCarDto) {

    let carDB = this.findOneById(id);

    if (updateCarDto.id && updateCarDto.id !== id) {
      throw new BadRequestException(`Car id is not valid inside body`)
    }

    this.cars = this.cars.map(car => {
      if (car.id === id) {
        carDB = { ...carDB,...updateCarDto, id }
        return carDB;
      }
      return car;

    })

    return carDB;
  }

  delete(id: string) {
    const car = this.findOneById(id);

    this.cars = this.cars.filter(car => car.id !== id);
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
