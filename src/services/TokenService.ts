import jwt from 'jsonwebtoken';
import { ITokenService } from "../interfaces/ITokenService";
import config from "../config/EnvConfig"

class TokenService implements ITokenService {

    generateToken(userId: string, expiresIn: number ): string {
        try {
            
            const token = jwt.sign({ userId }, config.JWT_SECRET, {expiresIn});
            return token;
        } catch (err) {
            // Log the error, then rethrow or handle accordingly
            console.error("Error generating token:", err);
            throw err; // or return { token: "" } if you prefer
        }
    }
    
}