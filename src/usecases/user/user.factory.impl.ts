import { User } from "domains/user";
import { MyUsecase } from "usecases/usecase";

export class UserFactoryImpl implements MyUsecase<User> {
    create(): User {
        return new User();
    }
}