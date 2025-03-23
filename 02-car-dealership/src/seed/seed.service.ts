import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { BRAND_SEED } from './data/brand.seed copy';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class SeedService {

  constructor(
    private readonly carsService: CarsService,
    private readonly brandService: BrandsService,
  ) {}

  populateDB() {
    // CARS_SEED
    // BRAND_SEED
    this.carsService.fillCarsWithSeedData(CARS_SEED)
    this.brandService.fillCarsWithSeedData(BRAND_SEED)
    return 'Sedd executed succesfully';
  }

}
