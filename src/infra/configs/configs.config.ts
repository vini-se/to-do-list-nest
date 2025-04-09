import * as dotenv from 'dotenv';

dotenv.config();

export interface ConfigsInterface {
  database: {
    type: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
  };
}

export const configs: ConfigsInterface = {
  database: {
    type: (process.env.DATABASE_TYPE as 'postgres') ?? 'postgres',
    host: process.env.DATABASE_HOST ?? 'localhost',
    port: Number(process.env.DATABASE_PORT ?? '5432'),
    username: process.env.DATABASE_USERNAME ?? 'todouser',
    password: process.env.DATABASE_PASSWORD ?? 'todopassword',
    database: process.env.DATABASE_NAME ?? 'tododb',
  },
};
