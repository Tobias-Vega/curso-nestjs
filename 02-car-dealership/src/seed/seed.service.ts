import { Injectable } from '@nestjs/common';
// import { CARS_SEED } from './data/cars.seed';
// import { BRANDS_SEED } from './data/brand.seed';

@Injectable()
export class SeedService {
  populateDB() {
    // CARS_SEED;
    // BRANDS_SEED;
    return 'SEED executed';
  }
}
