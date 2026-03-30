import { Injectable } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class SeedService {
  constructor(private readonly productsService: ProductsService) {}

  async executeSeed() {
    await this.insertNewProducts();

    return 'SEED EXCECUTED';
  }

  private async insertNewProducts() {
    await this.productsService.deletetAllProducts();
  }
}
