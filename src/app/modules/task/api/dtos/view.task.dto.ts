import { TaskStatusEnum } from '@/commons/enum/task-status.enum';
import { ViewTask } from '@/domain/entities/task.entity';
import { UserEntity } from '@/domain/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

export class ViewTaskDto implements ViewTask {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  userId: string;
  @ApiProperty()
  createdAt: string;
  @ApiProperty()
  updatedAt: string;
  @ApiProperty()
  status?: TaskStatusEnum;
  @ApiProperty()
  deletedAt?: string;
  @ApiProperty()
  user: UserEntity;
}
