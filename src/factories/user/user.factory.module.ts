import { Module } from "@nestjs/common";
import { UserRepositoryModule } from "repositories/user";
import { UserFactory } from "./user.factory.service";

@Module({
    imports: [
        UserRepositoryModule,
    ],
    providers: [UserFactory],
    exports: [UserFactory],
})

export class UserFactoryModule{}