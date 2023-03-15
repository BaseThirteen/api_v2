import { Controller, Delete, Post } from '@nestjs/common';
import { ImagesService } from './images.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('SaaS: Your Social Network | Images')
@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Post('upload')
  uploadImage() {
    return this.imagesService.uploadImage();
  }

  @Post('update')
  updateImage() {
    return this.imagesService.updateImage();
  }

  @Delete('delete')
  deleteImage() {
    return this.imagesService.deleteImage();
  }
}
