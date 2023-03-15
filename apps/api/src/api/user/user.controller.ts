import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Public } from '../auth/interfaces/auth.interface';

@ApiTags('SaaS: Account Endpoints')
@Controller('account')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('profile')
  @ApiOperation({ summary: 'Get account profile' })
  getProfile() {
    return {
      message: 'You made it to the secure route',
    };
  }

  @Public()
  @Get('public')
  @ApiOperation({ summary: 'Get public account profile' })
  getPublicProfile() {
    return {
      message: 'You made it to the public route',
    };
  }

  @Get('creator')
  @ApiOperation({ summary: 'Get creator account profile' })
  getCreatorProfile() {
    return {
      message: 'You made it to the creator route',
    };
  }

  @Get('vendor')
  @ApiOperation({ summary: 'Get vendor account profile' })
  getVendorProfile() {
    return {
      message: 'You made it to the vendor route',
    };
  }
}
