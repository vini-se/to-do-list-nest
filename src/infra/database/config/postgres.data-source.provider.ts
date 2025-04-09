import { configs } from '../../configs/configs.config';
import { DataSource, DataSourceOptions } from 'typeorm';

const postgresConfig = {
  ...configs.database,
  synchronize: true,
  entities: ['dist/domain/entities/*.entity{.ts,.js}'],
  migrations: ['dist/infra/database/migrations/*{.ts,.js}'],
} as DataSourceOptions;

export const postgresDataSource = new DataSource(postgresConfig);
