import { Controller, Get, InternalServerErrorException } from "@nestjs/common";
import { User } from "domains/user";
import { UserUsecaseImpl } from "usecases/user";
import { UserFactoryImpl } from "usecases/user/user.factory.impl";

@Controller("/user")
export class UserController {
    constructor(
        private readonly userUsecase: UserUsecaseImpl,
        private readonly userFactory: UserFactoryImpl,
    ){}

    @Get("/")
    async getAll(): Promise<Array<User>> {
        try{
            return await this.userUsecase.getAll();
        } catch(err) {
            console.log("DEBUG error message === ", err)
            
            throw new InternalServerErrorException()
        }
    }
}