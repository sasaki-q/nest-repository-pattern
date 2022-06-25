import { Module } from "@nestjs/common";
import { TodoFactory } from "./todo.factory.service";

@Module({
    imports: [],
    providers: [ TodoFactory ],
    exports: [ TodoFactory ]
})

export class TodoFactoryModule{}