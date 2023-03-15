import { Controller, Delete, Post } from '@nestjs/common';
import { VideosService } from './videos.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('SaaS: Your Social Network | Videos')
@Controller('videos')
export class VideosController {
  constructor(private readonly videosService: VideosService) {}

  @Post('upload')
  uploadVideo() {
    return this.videosService.uploadVideo();
  }

  @Post('update')
  updateVideo() {
    return this.videosService.updateVideo();
  }

  @Delete('delete')
  deleteVideo() {
    return this.videosService.deleteVideo();
  }
}
