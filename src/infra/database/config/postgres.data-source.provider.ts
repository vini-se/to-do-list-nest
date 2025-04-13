import { DataSourceOptions } from 'typeorm';
import { configs } from '../../configs/configs.config';

export const postgresConfig = {
  ...configs.database,
  synchronize: true,
  entities: ['dist/domain/entities/*.entity{.ts,.js}'],
  migrations: ['dist/infra/database/migrations/*{.ts,.js}'],
} as DataSourceOptions;
