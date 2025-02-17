import { IUserService } from "../interfaces/IUserService";

export class UserService implements IUserService {
    signup(): { username: string; email: string; password: string; } {
        throw new Error("Method not implemented.");
    }
    
}