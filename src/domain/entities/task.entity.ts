import { TaskStatusEnum } from 'src/commons/enum/task-status.enum';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { DefaultEntity } from './default.entity';
import { UserEntity } from './user.entity';

@Entity({ name: 'tasks' })
export class TaskEntity extends DefaultEntity {
  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  description: string;

  @Column({
    type: 'enum',
    enum: TaskStatusEnum,
    default: TaskStatusEnum.BACK_LOG,
  })
  status?: TaskStatusEnum;

  @ManyToOne(() => UserEntity, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @Column({ type: 'uuid', name: 'user_id' })
  userId: string;
}

export type ViewTask = TaskEntity;
export type CreateTask = Omit<
  TaskEntity,
  'id' | 'createdAt' | 'updatedAt' | 'user' | 'deletedAt'
>;
export type FilterTask = Partial<ViewTask>;
export type UpdateTask = Partial<CreateTask>;
