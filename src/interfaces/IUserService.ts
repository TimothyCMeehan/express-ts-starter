import { SignUpResponse } from "../types/SignUpResponse";

export interface IUserService {
    signup(username: string, email: string, password: string): Promise<SignUpResponse>;
}