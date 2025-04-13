import { ViewUser } from '@/domain/entities/user.entity';

export abstract class SignInAuthUseCase {
  abstract execute(data: ISignInAuthData): Promise<ISignInAuthResponse>;
}

export interface ISignInAuthResponse {
  accessToken: string;
  user: ViewUser;
}

export interface ISignInAuthData {
  username: string;
  password: string;
}
