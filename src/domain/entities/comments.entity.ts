import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { DefaultEntity } from './default.entity';
import { UserEntity } from './user.entity';
import { TaskEntity } from './task.entity';

@Entity({ name: 'comments' })
export class CommentEntity extends DefaultEntity {
  @Column({ type: 'varchar', length: 255 })
  comment: string;

  @ManyToOne(() => UserEntity, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @Column({ type: 'uuid', name: 'user_id' })
  userId: string;

  @ManyToOne(() => TaskEntity, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'task_id' })
  task: TaskEntity;

  @Column({ type: 'uuid', name: 'task_id' })
  taskId: string;
}
