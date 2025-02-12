import { IUser } from './IUser';

export interface IUserRepository {
  createUser(user: IUser): Promise<IUser>;
  getUserByUsername(username: string): Promise<IUser | null>;
  getUserByEmail(email: string): Promise<IUser | null>;
  getUserById(id: string): Promise<IUser | null>;
  updateUser(id: string, userUpdates: Partial<IUser>): Promise<IUser>;
  deleteUser(id: string): Promise<boolean>;
  // You can add more methods like updateUser, deleteUser, etc.
}