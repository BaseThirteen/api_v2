import { Injectable } from '@nestjs/common';

@Injectable()
export class VideosService {
  uploadVideo() {
    return 'uploadVideo';
  }

  updateVideo() {
    return 'updateVideo';
  }

  deleteVideo() {
    return 'deleteVideo';
  }
}
