import { User } from "domains/user";
import { MyFactory } from "factories/factory";

export class UserFactoryImpl implements MyFactory<User> {
    create<CreateUserDto>(dto): User {
        return new User();
    }
}