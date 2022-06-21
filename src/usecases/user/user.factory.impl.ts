import { User } from "domains/user";
import { MyUsecase } from "usecases/usecase";

export class UserFactoryImpl implements MyUsecase<User> {
    createUser(): User {
        return new User();
    }
}