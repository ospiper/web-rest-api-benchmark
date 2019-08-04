import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from './entity/country.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'postgres',
        host: '10.2.2.2',
        port: 5432,
        username: 'postgres',
        password: '',
        database: 'benchmark',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        extra: {
          max: 15,
          idleTimeoutMillis: 30000,
          connectionTimeoutMillis: 15000,
        },
      },
    ),
    TypeOrmModule.forFeature([Country]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
