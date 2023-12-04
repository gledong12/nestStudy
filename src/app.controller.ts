import { ConfigService } from '@nestjs/config';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService:ConfigService
    ) {}

  @Get()
  getHello(): string {
    // return this.appService.getHello();
    return process.env.DATABASE_HOST;
  }

  @Get('/db-host-from-config')
  getDatabaseHostFromConfigService(): string {
    return this.configService.get('DATABASE_HOST')
  }
}
