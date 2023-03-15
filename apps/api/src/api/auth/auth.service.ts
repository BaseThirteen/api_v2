import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = { email, password };
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
  }

  async login(loginDto: LoginDto) {
    const user = await this.userService.findOne(loginDto.email);
    if (user && bcrypt.compareSync(loginDto.password, user.password)) {
      const { password, ...result } = user;
      return {
        access_token: this.jwtService.sign(result),
      };
    }
    return null;
  }

  async register(registerDto: RegisterDto) {
    const hashedPassword = bcrypt.hashSync(registerDto.password, 10);
    const user = await this.userService.create({
      ...registerDto,
      password: hashedPassword,
    });
    const { password, ...result } = user;
    return {
      access_token: this.jwtService.sign(result),
    };
  }
}
