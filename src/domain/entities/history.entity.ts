import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TaskEntity } from './task.entity';

@Entity({ name: 'history' })
export class HistoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => TaskEntity, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'task_id' })
  task: TaskEntity;

  @Column({ type: 'uuid', name: 'task_id' })
  taskId: string;

  @Column({ type: 'varchar', length: 255 })
  event: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp without time zone',
    default: () => 'NOW()',
  })
  createdAt: string;
}
