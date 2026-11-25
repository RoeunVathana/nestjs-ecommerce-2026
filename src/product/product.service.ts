import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    findAll(){
        return [
            {
                id: 1, name: "testing", price: 10.99
            }
        ]
    }
}
