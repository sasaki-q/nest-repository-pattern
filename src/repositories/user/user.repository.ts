import { User } from "domains/user";

export abstract class UserRepository {
    abstract getUsers: () => Promise<Array<User>>;
}