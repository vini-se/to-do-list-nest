import { ViewUser } from '@/domain/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

export interface IHashTokenResponse {
  accessToken: string;
}

export interface ISignedUser {
  sub: string;
  username: string;
  role: string;
}

export interface IJwtRequest extends Request {
  user: ISignedUser;
}

@Injectable()
export class JwtUtils {
  constructor(private readonly jwtService: JwtService) {}

  async hashToken(user: ViewUser): Promise<IHashTokenResponse> {
    const dataToStore: ISignedUser = {
      sub: user.id,
      username: user.username,
      role: user.role,
    };
    const accessToken = await this.jwtService.signAsync(dataToStore);
    return { accessToken };
  }
}
