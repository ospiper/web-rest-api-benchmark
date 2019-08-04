import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello() {
    return { hello: 'world' };
  }

  @Get('compute')
  compute() {
    let x = 0;
    let y = 1;
    const max = 10000 + Math.random() * 500;
    for (let i = 0; i <= max; i++) {
      const z = x + y;
      x = y;
      y = z;
    }
    return { status: 'done' };
  }

  @Get('countries')
  async getCountries() {
    const data = await this.appService.getAllCountries();
    return {data};
  }

}
