import { Injectable } from '@nestjs/common';
import { CreateProductDTO } from './dto/products.dto';
import { ProductsRepository } from './repositories/product.repository';

@Injectable()
export class IpetService {
  constructor(private readonly repository: ProductsRepository) {}

  async create(product: CreateProductDTO) {
    return this.repository.create({
      ...product,
      image: product.imageURL,
    });
  }

  async findAllAvailableProducts() {
    return this.repository.findAllAvailable();
  }

  async deleteById(id: string) {
    return this.repository.deleteById(id);
  }

  async updateById(id: string, product: Partial<CreateProductDTO>) {
    return this.repository.updateById(id, {
      ...product,
      image: product.imageURL,
    });
  }
}