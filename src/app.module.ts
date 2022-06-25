import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from 'config/orm';
import { AppController } from './app.controller';
import { UserController } from 'controllers/user.controller';
import { UserUsecaseModule } from 'usecases/user';
import { UserFactoryModule } from 'factories/user';
import { TodoFactoryModule } from 'factories/todo';

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
    UserFactoryModule,
    TodoFactoryModule,
  ],
  controllers: [AppController, UserController],
  providers: [],
})

export class AppModule {}
