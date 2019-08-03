import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from './entity/country.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Country)
    private readonly countryRepository: Repository<Country>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getAllCountries(): Promise<Country[]> {
    return this.countryRepository.find();
  }
}
