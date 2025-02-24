import { ITokenService } from "../interfaces/ITokenService";
import { IUserRepository } from "../interfaces/IUserRepository";
import { IUserService } from "../interfaces/IUserService";
import { SignUpResponse } from "../types/SignUpResponse";

export class UserService implements IUserService {
    private readonly userRepository: IUserRepository;
    private readonly tokenService: ITokenService;

    constructor( userRepository: IUserRepository, tokenService: ITokenService) {
        this.userRepository = userRepository;
        this.tokenService = tokenService;
    }

    async signup(username: string, email: string, password: string): Promise<SignUpResponse> {

        // check if user already exists in database
        let user = await this.userRepository.getUserByEmail(email);

        //if user already exists,
        if (user) {
            //send 409 response
            return {
                status: 409,
                message: "User already exists"
            };
        }
        

        let newUser = await this.userRepository.createUser( username, email, password);

        let token = this.tokenService.generateToken(newUser._id, 60*60);

        throw new Error("Method not implemented.");
    }
    
}