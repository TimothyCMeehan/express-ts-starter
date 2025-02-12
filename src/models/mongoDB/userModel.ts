import { Schema, model } from 'mongoose';
import { IUser } from '../../interfaces/IUser';

const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const UserModel = model<IUser>('User', userSchema);