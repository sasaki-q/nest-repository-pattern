import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from 'config/orm';
import { UserController } from 'controllers/user.controller';
import { UserUsecaseModule } from 'usecases/user';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeOrmConfigService,
    }),
    UserUsecaseModule,
  ],
  controllers: [AppController, UserController],
  providers: [],
})

export class AppModule {}
