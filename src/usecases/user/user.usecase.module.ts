import { Module } from "@nestjs/common";
import { UserRepositoryModule } from "repositories/user";
import { UserFactoryImpl } from "./user.factory.impl";
import { UserUsecaseImpl } from "./user.usecase.impl";

@Module({
    imports: [
        UserRepositoryModule,
    ],
    providers: [
        UserUsecaseModule,
        UserUsecaseImpl,
        UserFactoryImpl,
    ],
    exports: [
        UserUsecaseModule,
        UserUsecaseImpl,
        UserFactoryImpl,
    ]
})
export class UserUsecaseModule{}