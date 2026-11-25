import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaService } from './prisma/prisma.service.js';
import { ProductService } from './product/product.service.js';
import { ProductModule } from './product/product.module.js';

@Module({
  imports: [ProductModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, ProductService],
})
export class AppModule {}
