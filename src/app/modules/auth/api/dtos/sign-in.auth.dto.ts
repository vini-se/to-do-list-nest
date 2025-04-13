import { ISignInAuthData } from '@/domain/use-cases/auth/sign-in.auth.use-case';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SignInAuthDto implements ISignInAuthData {
  @ApiProperty({
    description: 'The password of the user',
    example: 'johndoePass',
    type: String,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    description: 'The username of the user',
    example: 'johndoe',
    type: String,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  username: string;
}
