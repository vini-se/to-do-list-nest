import { Column, Entity } from 'typeorm';
import { DefaultEntity } from './default.entity';
import { UserRoleEnum } from 'src/commons/enum/user-role.enum';

@Entity({ name: 'users' })
export class UserEntity extends DefaultEntity {
  @Column({ type: 'varchar', length: 50, unique: true })
  username: string;

  @Column({ type: 'varchar', length: 64 })
  password: string;

  @Column({ type: 'varchar', length: 100, name: 'challenge_question' })
  challengeQuestion: string;

  @Column({ type: 'varchar', length: 100, name: 'challenge_answer' })
  challengeAnswer: string;

  @Column({ type: 'enum', enum: UserRoleEnum, default: UserRoleEnum.USER })
  role: UserRoleEnum;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;
}
