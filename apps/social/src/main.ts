import { NestFactory } from '@nestjs/core';
import { SocialModule } from './social.module';

async function bootstrap() {
  const app = await NestFactory.create(SocialModule);
  await app.listen(3000);
}
bootstrap();
