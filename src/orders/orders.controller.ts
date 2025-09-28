import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { MICROSERVICE_CLIENT } from 'src/constants';

@Controller('orders')
export class OrdersController {
    constructor(@Inject(MICROSERVICE_CLIENT.PRODUCT_REDIS_CLIENT) private productRedisClient: ClientProxy) {}
    @MessagePattern('create_order')
    createOrder(data: any) {
        console.log({message: 'Order received on orders-service', data});
        this.productRedisClient.emit('order.created', data);
        return this.productRedisClient.send('get_product', data.productId);
    }
}
