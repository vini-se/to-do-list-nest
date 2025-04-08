import { DataSource } from 'typeorm';
import configs from 'src/infra/configs/configs.config';

const postgresDataSource = new DataSource({
  ...configs.database,
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/src/infra/database/migrations/*{.ts,.js}'],
});

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      return postgresDataSource.initialize();
    },
  },
];
