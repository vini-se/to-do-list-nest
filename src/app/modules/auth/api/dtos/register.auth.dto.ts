import { CreateUser } from '@/domain/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class RegisterAuthDto implements CreateUser {
  @ApiProperty({
    description: 'The username of the user',
    example: 'john_doe',
    required: true,
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    description: 'The password of the user',
    example: 'Pass@1234',
    required: true,
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    description: 'The user question to recovery the password',
    example: 'When is my bday?',
    required: true,
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  challengeQuestion: string;

  @ApiProperty({
    description: 'The user answer to recovery the password',
    example: '210603',
    required: true,
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  challengeAnswer: string;
}
