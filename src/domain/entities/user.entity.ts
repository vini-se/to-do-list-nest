import { UserRoleEnum } from 'src/commons/enum/user-role.enum';
import { Column, Entity } from 'typeorm';
import { DefaultEntity } from './default.entity';

@Entity({ name: 'users' })
export class UserEntity extends DefaultEntity {
  @Column({ type: 'varchar', length: 50, unique: true })
  username: string;

  @Column({ type: 'varchar', length: 64 })
  password: string;

  @Column({
    type: 'varchar',
    length: 100,
    name: 'challenge_question',
    nullable: true,
  })
  challengeQuestion: string;

  @Column({
    type: 'varchar',
    length: 100,
    name: 'challenge_answer',
    nullable: true,
  })
  challengeAnswer: string;

  @Column({ type: 'enum', enum: UserRoleEnum, default: UserRoleEnum.USER })
  role: UserRoleEnum;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;
}

export type CreateUser = Omit<
  UserEntity,
  'id' | 'createdAt' | 'updatedAt' | 'deletedAt' | 'role' | 'isActive'
>;

export type FilterUser = Partial<UserEntity>;

export type ViewUser = UserEntity;

export type UserRecoverPassword = Omit<
  UserEntity,
  'id' | 'createdAt' | 'updatedAt' | 'deletedAt' | 'role' | 'isActive'
>;

export type UserSignIn = Omit<
  UserEntity,
  | 'id'
  | 'createdAt'
  | 'updatedAt'
  | 'deletedAt'
  | 'role'
  | 'isActive'
  | 'challengeQuestion'
  | 'challengeAnswer'
>;
