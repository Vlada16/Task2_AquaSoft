import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { HotelsController } from './hotels.controller';
import { HotelsService } from './hotels.service';
import { Hotel } from './models/hotel.model';
import { authenticate } from '../auth/auth.middleware';

@Module({
  imports: [SequelizeModule.forFeature([Hotel])],
  controllers: [HotelsController],
  providers: [HotelsService],
})
export class HotelsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(authenticate)
      .forRoutes(
        { path: 'hotels', method: RequestMethod.POST },
       
      );
  }
}
