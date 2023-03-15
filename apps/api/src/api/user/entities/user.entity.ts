import { BeforeInsert, Column, Entity, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { v4 } from 'uuid';

@Entity('user', { schema: 'meu' })
export class User {
  @BeforeInsert()
  addId() {
    this.id = v4();
  }
  @PrimaryColumn('uuid', { name: 'id' })
  @ApiProperty({ description: 'unique identifier' })
  id: string;

  @Column('character varying', { name: 'username' })
  @ApiProperty({ description: 'username' })
  username: string;

  @Column('character varying', { name: 'firstname' })
  @ApiProperty({ description: 'firstname' })
  firstname: string;

  @Column('character varying', { name: 'lastname' })
  @ApiProperty({ description: 'lastname' })
  lastname: string;

  @Column('character varying', { name: 'password' })
  @ApiProperty({ description: 'password' })
  password: string;

  @Column('character varying', { name: 'email' })
  @ApiProperty({ description: 'email' })
  email: string;

  @Column('character varying', { name: 'avatar' })
  @ApiProperty({ description: 'avatar' })
  avatar: string;

  @Column('character varying', { name: 'cover' })
  @ApiProperty({ description: 'cover' })
  cover: string;
}
