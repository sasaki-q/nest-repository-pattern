import { Module } from "@nestjs/common";
import { TodoFactoryService } from "./todo.factory.service";
import { TodoUsecaseService } from "./todo.usecase.service";

@Module({
    imports: [],
    providers: [
        TodoUsecaseService,
        TodoFactoryService,
    ],
    exports: [
        TodoUsecaseService,
        TodoFactoryService,
    ]
})

export class TodoUsecaseModule{}