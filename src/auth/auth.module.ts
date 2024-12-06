
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';

@Module({
  controllers: [AuthController], // Register the controller
})
export class AuthModule {}
