import { Module } from "@nestjs/common";
import { User } from "domains/user";
import { UserRepositoryModule } from "repositories/user";
import { MyUsecase } from "usecases/usecase";
import { UserUsecaseImpl } from "./user.usecase.impl";

@Module({
    imports: [
        UserRepositoryModule,
    ],
    providers: [
        {
            provide: MyUsecase<User>,
            useClass: UserUsecaseImpl,
        }
    ],
    exports: [
        MyUsecase<User>,
    ]
})

export class UserUsecaseModule{}