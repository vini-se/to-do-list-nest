import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { postgresConfig } from './postgres.data-source.provider';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        return postgresConfig;
      },
    }),
  ],
})
export class PostgresDataSourceModule {}
