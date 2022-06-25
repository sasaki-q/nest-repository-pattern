import { Body, Controller, Get, Inject, InternalServerErrorException, Post } from "@nestjs/common";
import { User } from "domains/user";
import { MyUsecase } from "usecases/usecase";
import { MyFactory } from "factories/factory";
import { TransactionDto } from "dtos/user";
import { Todo } from "domains/todo";

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
    async createUser(@Body() dto : TransactionDto): Promise<any> {
        const { user, todo } = dto;
        try{
            const createdTodo: Todo = this.todoFactory.create(todo)
            console.log("DEBUG created todo === ", createdTodo)
            return "success"
        }catch(err){
            console.log("DEBUG error message === ", err)
            throw new InternalServerErrorException()
        }
    }
}