import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersController } from './orders/orders.controller';
import { Client, ClientsModule, Transport } from '@nestjs/microservices';
import { MICROSERVICE_CLIENT } from './constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: MICROSERVICE_CLIENT.PRODUCT_REDIS_CLIENT,
        transport: Transport.REDIS,
        options:{
          host: '127.0.0.1',
          port: 6379
        }
      }
    ])
  ],
  controllers: [AppController, OrdersController],
  providers: [AppService],
})
export class AppModule {}
