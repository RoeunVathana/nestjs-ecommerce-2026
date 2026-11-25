import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service.js';
@Controller('product')
export class ProductController {

    constructor(
        private readonly productService: ProductService
    ){}
    // private readonly productService = new ProductService();  

    @Get()
    findAll(){
        return this.productService.findAll()
    }
}
