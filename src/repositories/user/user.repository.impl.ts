import { User } from "domains/user";
import { UserRepository } from "./user.repository";

export class UserRepositoryImpl implements UserRepository {
    constructor(){}

    async getUsers(): Promise<User[]> {
        return []
    }
}