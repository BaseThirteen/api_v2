import { Controller, Post } from '@nestjs/common';
import { MediaService } from './media.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('BaaS: Your Media Network')
@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Post('activate')
  activateMedia() {
    return this.mediaService.activateMedia();
  }
}
