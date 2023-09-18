import { User } from "./user";
import { UserService } from "./userService"

export class UserJSONService implements UserService {

    add(username: string): User {
        throw new Error("Method not implemented.");
    }
    
    getById(id: number): User | null {
        throw new Error("Method not implemented.");
    }

    // login(login: string, pwd: string): boolean {
    //     throw new Error("Method not implemented.");
    // }
}
