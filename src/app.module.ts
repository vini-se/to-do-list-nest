import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './app/modules/auth/auth.module';
import { CommentModule } from './app/modules/comment/comment.module';
import { TaskModule } from './app/modules/task/task.module';
import { jwtConstants } from './commons/const/jwt.const';
import { PostgresDataSourceModule } from './infra/database/config/postgres.data-source.module';

@Module({
  imports: [
    PostgresDataSourceModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),
    AuthModule,
    CommentModule,
    TaskModule,
  ],
})
export class AppModule {}
