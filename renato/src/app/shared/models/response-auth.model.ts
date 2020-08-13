import { UserModel } from './user.model';

export interface ResponseAuthModel {
  token: string;
  user: UserModel;
}
