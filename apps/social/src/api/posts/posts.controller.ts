import { Controller, Delete, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('SaaS: Your Social Network | Posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post('create')
  createPost() {
    return this.postsService.createPost();
  }

  @Post('update')
  updatePost() {
    return this.postsService.updatePost();
  }

  @Delete('delete')
  deletePost() {
    return this.postsService.deletePost();
  }
}
