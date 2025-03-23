import { Car } from "src/cars/interfaces/car.interface";
import { v7 as uuid7 } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuid7(),
    brand: 'Toyota',
    model: 'Corolla'
  },
  {
    id: uuid7(),
    brand: 'Honda',
    model: 'Civic'
  },
  {
    id: uuid7(),
    brand: 'Jeep',
    model: 'Cherokee'
  },
]

