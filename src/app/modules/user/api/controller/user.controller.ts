import { AuthGuard, IJwtRequest } from '@/app/modules/auth/guard/auth.guard';
import { ListHistoryUserUseCase } from '@/domain/use-cases/user/list-history.user.use-case';
import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('user')
@UseGuards(AuthGuard)
@ApiBearerAuth()
export class UserController {
  constructor(
    private readonly listHistoryUserUseCase: ListHistoryUserUseCase,
  ) {}

  @Get('history')
  async history(@Req() req: IJwtRequest) {
    return await this.listHistoryUserUseCase.execute(req.user.sub);
  }
}
