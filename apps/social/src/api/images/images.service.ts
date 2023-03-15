import { Injectable } from '@nestjs/common';

@Injectable()
export class ImagesService {
  uploadImage() {
    return 'uploadImage';
  }

  updateImage() {
    return 'updateImage';
  }

  deleteImage() {
    return 'deleteImage';
  }
}
