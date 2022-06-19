import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

type DatabaseConfig = {
  PORT: number;
  DB_HOST: string;
  DB_USER: string;
  DB_PASS: string;
  DB_NAME: string;
}

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {

  createTypeOrmOptions(): TypeOrmModuleOptions {
    const service = new ConfigService<DatabaseConfig>();

    return {
      type: 'postgres',
      host: service.get("DB_HOST"),
      port: service.get("PORT"),
      username: service.get("DB_USER"),
      password: service.get("DB_PASS"),
      database: service.get("DB_NAME"),
      entities: [],
      synchronize: false,
    }
  }
}