export interface ITokenService {
    generateToken(userId: string, expiresIn: number): string;
}