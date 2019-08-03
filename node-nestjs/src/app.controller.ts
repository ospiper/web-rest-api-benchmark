import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { createQueryBuilder, getManager, getRepository } from 'typeorm';
import { User } from './entity/user.entity';
import { Country } from './entity/country.entity';

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

  @Get('users')
  async getUsers() {
    // const countryQuery = getRepository(Country).createQueryBuilder('country');
    const query = getRepository(User).createQueryBuilder('user');
    const users = query.innerJoin(
      'user.countries',
      'country_temp',
      'country_temp.countryName = :name',
      {name: 'France'},
    )
      .leftJoinAndSelect('user.countries', 'country')
      .getMany();
    return users;
  }
}
