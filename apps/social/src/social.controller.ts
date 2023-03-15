import { Controller, Get, Post } from '@nestjs/common';
import { SocialService } from './social.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('SaaS: Your Social Network')
@Controller('social')
export class SocialController {
  constructor(private readonly socialService: SocialService) {}

  @Post('activate')
  activateSocial() {
    return this.socialService.activateSocial();
  }
}
