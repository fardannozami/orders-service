import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('orders')
export class OrdersController {
    @MessagePattern('create_order')
    createOrder(data: any) {
        console.log({message: 'Order received on orders-service', data});
        return { message: 'Order created', data };
    }
}
