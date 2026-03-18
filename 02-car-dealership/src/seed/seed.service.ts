import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brand.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly brandService: BrandsService,
    private readonly carsService: CarsService,
  ) {}

  populateDB() {
    this.brandService.fillCarsWithSeedData(BRANDS_SEED);
    this.carsService.fillCarsWithSeedData(CARS_SEED);

    return 'SEED executed';
  }
}
