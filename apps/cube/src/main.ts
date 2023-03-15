import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { CubeModule } from './cube.module';
import * as http from 'http';
import { setupSwagger } from '../../api/src/config/swagger/swagger.config';
import serverConfig from './config/server';
import logging from 'apps/api/src/config/logger/cube.logging';
async function bootstrap() {
  const NAMESPACE = 'TH²';
  // const logger = new Logger(NAMESPACE);
  const app = await NestFactory.create<NestExpressApplication>(CubeModule, {
    logger: ['error', 'warn', 'debug'],
    cors: {
      origin: '*',
      methods: ['GET', 'POST', 'PUT'],
    },
  });
  const globalPrefix = 'v1';
  app.setGlobalPrefix(globalPrefix);
  app.useStaticAssets('www/assets');
  app.setBaseViewsDir('www');
  app.setViewEngine('ejs');

  // app.use(bodyParser.urlencoded({ extended: false }));
  // app.use(bodyParser.json());

  const httpServer = http.createServer();

  setupSwagger(app);

  httpServer.listen(serverConfig.server.port, () =>
    logging.info(
      NAMESPACE,
      `Server is running ${serverConfig.server.hostname}:${serverConfig.server.port}`,
    ),
  );
}
void bootstrap();
