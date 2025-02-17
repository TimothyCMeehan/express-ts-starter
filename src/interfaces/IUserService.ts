export interface IUserService {
    signup(): {
        username: string;
        email: string;
        password: string;
    };
}