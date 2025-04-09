import { postgresDataSource } from './postgres.data-source.provider';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      return postgresDataSource.initialize();
    },
  },
];
