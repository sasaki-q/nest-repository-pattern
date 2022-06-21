import { Inject } from "@nestjs/common";
import { User } from "domains/user";
import { MyRepository } from "repositories/repository";
import { MyUsecase } from "usecases/usecase";

export class UserUsecaseImpl implements MyUsecase<User> {
    constructor(
        @Inject(MyRepository<User>)
        private readonly repository: MyRepository<User>
    ){}

    async getAll(): Promise<Array<User>> {
        return await this.repository.getAll();
    }
}