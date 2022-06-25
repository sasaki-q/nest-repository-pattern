import { Todo } from "domains/todo";
import { MyFactory } from "factories/factory";

export class TodoFactoryImpl implements MyFactory<Todo> {
    create(): Todo {
        return new Todo()
    }
}