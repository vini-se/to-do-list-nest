import { UserRecoverPassword } from '@/domain/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ForgotPasswordAuthDto implements UserRecoverPassword {
  @ApiProperty({
    description: 'The answer to the security challenge question',
    example: 'My first pet was a dog.',
    type: String,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  challengeAnswer: string;

  @ApiProperty({
    description: 'The security challenge question',
    example: 'What was the name of your first pet?',
    type: String,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  challengeQuestion: string;

  @ApiProperty({
    description: 'The new password for the user',
    example: 'newSecurePassword123!',
    type: String,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    description: 'The username of the user',
    example: 'john_doe',
    type: String,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  username: string;
}
