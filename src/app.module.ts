import { validationSchema } from './config/validationSchema';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { EmailModule } from './email/email.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import emailConfig from './config/emailConfig';

@Module({
  imports: [
    UsersModule, 
    EmailModule, 
    ConfigModule.forRoot({
    envFilePath: [`${__dirname}/config/env/.${process.env.NODE_ENV}.env`],
    load: [emailConfig],
    isGlobal: true,
    validationSchema,
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
