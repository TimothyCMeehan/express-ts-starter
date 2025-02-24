import { IUserRepository } from '../interfaces/IUserRepository';
import { IUser } from '../interfaces/IUser';
import { UserModel } from '../models/mongoDB/userModel';

export class MongoUserRepository implements IUserRepository {
  async createUser(username: string, email:string, password: string): Promise<IUser> {
    // Mongoose returns the created document
    const newUser = await UserModel.create({username, email, password});

    return newUser.toObject(); // converting to a plain JS object
  }

  async getUserByUsername(username: string): Promise<IUser | null> {
    return await UserModel.findOne({ username });
  }

  async getUserByEmail(email: string): Promise<IUser | null> {
    return await UserModel.findOne({ email });
  }

  async getUserById(id: string): Promise<IUser | null> {
    return await UserModel.findById(id);
  }

  async updateUser(id: string, userUpdates: Partial<IUser>): Promise<IUser> {
    const updatedUser = await UserModel.findByIdAndUpdate(id, userUpdates, { new: true });
    if (!updatedUser) {
      throw new Error(`User with id ${id} not found`);
    }
    return updatedUser.toObject();
  }

  async deleteUser(id: string): Promise<boolean> {
    const result = await UserModel.findByIdAndDelete(id);
    return !!result;
  }
}