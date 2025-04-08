import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostgresDataSourceModule } from './infra/database/config/postgres.data-source.module';

@Module({
  imports: [PostgresDataSourceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
