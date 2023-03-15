import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async findOne(email: User['email']): Promise<User> {
    return this.userRepository.findOne({ where: { email } });
  }

  async create(user: {
    firstname: string;
    password: string;
    email: string;
    username: string;
    lastname: string;
  }): Promise<User> {
    return this.userRepository.save(user);
  }
}
