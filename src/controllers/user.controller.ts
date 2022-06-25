import { Body, Controller, Get, Inject, InternalServerErrorException, Post } from "@nestjs/common";
import { User } from "domains/user";
import { MyUsecase } from "usecases/usecase";
import { MyFactory } from "factories/factory";
import { CreateUserDto } from "dtos/user";
import { CreateTodoDto } from "dtos/todo";
import { Todo } from "domains/todo";

type TransactionDto = {
    user: CreateUserDto,
    todo: CreateTodoDto,
}

@Controller("/user")
export class UserController {
    constructor(
        @Inject(MyUsecase<User>)
        private readonly userUsecase: MyUsecase<User>,

        @Inject(MyFactory<User>)
        private readonly userFactory: MyFactory<User>,

        @Inject(MyFactory<Todo>)
        private readonly todoFactory: MyFactory<Todo>
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
    async createUser(@Body() { user, todo }: TransactionDto): Promise<any> {
        try{
            return "success"
        }catch(err){
            console.log("DEBUG error message === ", err)
            throw new InternalServerErrorException()
        }
    }
}