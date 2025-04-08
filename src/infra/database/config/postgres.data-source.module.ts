import { Module } from '@nestjs/common';
import { databaseProviders } from './postgres.data-source.provider';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class PostgresDataSourceModule {}
