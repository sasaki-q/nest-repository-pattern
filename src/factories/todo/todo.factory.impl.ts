import { Todo } from "domains/todo";
import { CreateTodoDto } from "dtos/todo";
import { MyFactory } from "factories/factory";

export class TodoFactoryImpl implements MyFactory<Todo> {

    create<CreateTodoDto>(dto): Todo {
        const todo = new Todo()
        todo.uid = dto.uid;
        todo.title = dto.title;
        return todo;
    }
}