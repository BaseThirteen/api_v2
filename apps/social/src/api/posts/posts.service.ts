import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  createPost() {
    return 'createPost';
  }

  updatePost() {
    return 'updatePost';
  }

  deletePost() {
    return 'deletePost';
  }

  getPost() {
    return 'getPost';
  }

  getPosts() {
    return 'getPosts';
  }
}
