import { Module } from "@nestjs/common";
import { User } from "domains/user";
import { MyFactory } from "factories/factory";
import { UserRepositoryModule } from "repositories/user";
import { UserFactoryImpl } from "./user.factory.impl";

@Module({
    imports: [
        UserRepositoryModule,
    ],
    providers: [
        {
            provide: MyFactory<User>,
            useClass: UserFactoryImpl,
        },
    ],
    exports: [
        MyFactory<User>,
    ]
})

export class UserFactoryModule{}