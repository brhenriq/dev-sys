import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
} from 'typeorm';

@Entity('employees')
export class Employee {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  isManager: boolean;

  @CreateDateColumn()
  createdAt: Date;
}
