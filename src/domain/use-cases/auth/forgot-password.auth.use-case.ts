import { UserRecoverPassword } from '@/domain/entities/user.entity';
import { ISignInAuthResponse } from './sign-in.auth.use-case';

export abstract class ForgotPasswordUseCase {
  abstract execute(data: UserRecoverPassword): Promise<ISignInAuthResponse>;
}
