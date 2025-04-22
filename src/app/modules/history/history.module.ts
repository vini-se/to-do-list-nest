import { HistoryEntity } from '@/domain/entities/history.entity';
import { HistoryRepository } from '@/domain/repositories/history.repository';
import { HistoryRepositoryImpl } from '@/infra/repository/history.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([HistoryEntity])],
  providers: [
    HistoryRepositoryImpl,
    {
      provide: HistoryRepository,
      useExisting: HistoryRepositoryImpl,
    },
  ],
  exports: [HistoryRepository],
})
export class HistoryModule {}
