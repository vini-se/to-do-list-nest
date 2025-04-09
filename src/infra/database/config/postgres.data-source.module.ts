import { Module } from '@nestjs/common';
import { databaseProviders } from './data-base.providers';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class PostgresDataSourceModule {}
