import { Module } from '@nestjs/common';
import { SocialController } from './social.controller';
import { SocialService } from './social.service';
import { PostsModule } from './api/posts/posts.module';
import { VideosModule } from './api/videos/videos.module';
import { ImagesModule } from './api/images/images.module';

@Module({
  imports: [PostsModule, VideosModule, ImagesModule],
  controllers: [SocialController],
  providers: [SocialService],
})
export class SocialModule {}
