import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import * as compression from 'compression';
import { join } from 'path';
import { setupSwagger } from './config/swagger/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    // logger: ['error', 'warn', 'debug'],
    cors: true,
  });
  const globalPrefix = 'v1';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.NODE_PORT || 3021;
  app.use(cookieParser());
  app.use(compression());
  app.useStaticAssets(join(__dirname, '..', 'client/assets'));
  app.setBaseViewsDir(join(__dirname, '..', 'client'));
  app.setViewEngine('ejs');

  // ----| [ CONNECTION ] |----
  setupSwagger(app);
  await app.listen(port);
}

void bootstrap();
