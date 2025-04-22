import { Module } from '@nestjs/common';
import { HistoryModule } from '../history/history.module';
import { UserController } from './api/controller/user.controller';
import { ListHistoryUserUseCase } from '@/domain/use-cases/user/list-history.user.use-case';
import { ListHistoryUserUseCaseImpl } from './use-cases/list-history.user.use-case';

@Module({
  imports: [HistoryModule],
  controllers: [UserController],
  providers: [
    ListHistoryUserUseCaseImpl,
    {
      provide: ListHistoryUserUseCase,
      useExisting: ListHistoryUserUseCaseImpl,
    },
  ],
})
export class UserModule {}
