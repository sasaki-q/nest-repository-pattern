import { Module } from "@nestjs/common";
import { Todo } from "domains/todo";
import { User } from "domains/user";
import { MyFactory } from "factories/factory";
import { TodoFactoryImpl } from "./todo.factory.impl";

@Module({
    imports: [],
    providers: [
        {
            provide: MyFactory<Todo>,
            useClass: TodoFactoryImpl,
        },
    ],
    exports: [
        MyFactory<Todo>,
    ]
})

export class TodoFactoryModule{}