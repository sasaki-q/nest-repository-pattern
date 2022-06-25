import { Body, Controller, Get, Inject, InternalServerErrorException, Post } from "@nestjs/common";
import { User } from "domains/user";
import { MyUsecase } from "usecases/usecase";
import { TransactionDto } from "dtos/user";
import { Todo } from "domains/todo";
import { UserFactory } from "factories/user";
import { TodoFactory } from "factories/todo";

@Controller("/user")
export class UserController {
    constructor(
        @Inject(MyUsecase<User>)
        private readonly userUsecase: MyUsecase<User>,

        private readonly userFactory: UserFactory,
        private readonly todoFactory: TodoFactory,
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
            const createdUser: User = this.userFactory.create(user)
            const createdTodo: Todo = this.todoFactory.create(todo)

            return { "user": createdUser, "todo": createdTodo }
        }catch(err){
            console.log("DEBUG error message === ", err)
            throw new InternalServerErrorException()
        }
    }
}