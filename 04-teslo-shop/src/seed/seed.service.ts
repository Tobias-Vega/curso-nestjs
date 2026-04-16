import { Injectable } from '@nestjs/common';
import { initialData } from './data/seed-data';
import { ProductsService } from '../products/products.service';

@Injectable()
export class SeedService {
  constructor(private readonly productsService: ProductsService) {}

  async executeSeed() {
    await this.insertNewProducts();

    return 'SEED EXCECUTED';
  }

  private async insertNewProducts() {
    await this.productsService.deletetAllProducts();

    const products = initialData.products;

    const insertPromises: Promise<any>[] = [];

    // products.forEach((product) => {
    //   insertPromises.push(this.productsService.create(product));
    // });

    await Promise.all(insertPromises);
  }
}
