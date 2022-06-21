import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "domains/user";
import { UserRepository } from "./user.repository";
import { UserRepositoryImpl } from "./user.repository.impl";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            User
        ])
    ],
    providers: [
        {
            provide: UserRepository,
            useClass: UserRepositoryImpl,
        }
    ],
    exports: [
        UserRepository
    ]
})

export class UserRepositoryModule{}