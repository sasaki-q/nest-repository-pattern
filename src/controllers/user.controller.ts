import { Body, Controller, Get, Inject, InternalServerErrorException, Post } from "@nestjs/common";
import { User } from "domains/user";
import { MyUsecase } from "usecases/usecase";
import { MyFactory } from "factories/factory";
import { CreateUserDto } from "dtos/user";

@Controller("/user")
export class UserController {
    constructor(
        @Inject(MyUsecase<User>)
        private readonly userUsecase: MyUsecase<User>,

        @Inject(MyFactory<User>)
        private readonly userFactory: MyFactory<User>,
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

    @Post("/")
    async createUser(@Body() dto: CreateUserDto): Promise<any> {
        const { age, name, role, email, password } = dto;
        try{
            return "success"
        }catch(err){
            console.log("DEBUG error message === ", err)
            throw new InternalServerErrorException()
        }
    }
}