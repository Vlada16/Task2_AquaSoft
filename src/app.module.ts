
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { HotelsModule } from './hotels/hotels.module';

import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule, 
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'hotelsDB',
      autoLoadModels: true,
      synchronize: true,
    }),
    HotelsModule,
  ],
})
export class AppModule {}
