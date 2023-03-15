import { Module } from '@nestjs/common';
import { CubeController } from './cube.controller';
import { CubeService } from './cube.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { DatabaseModule } from '../../api/src/database/database.module';
import { AuthModule } from '../../api/src/api/auth/auth.module';
import { UserModule } from '../../api/src/api/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        METACUBE_HOST: Joi.string().required(),
        METACUBE_PORT: Joi.number().required(),
        METACUBE_USER: Joi.string().required(),
        METACUBE_PASSWORD: Joi.string().required(),
        METACUBE_NAME: Joi.string().required(),
        METACUBE_SCHEMA: Joi.string().required(),
      }),
      isGlobal: true,
      envFilePath: [
        '.env',
        'env/.env.server',
        'env/.env.payment',
        'env/.env.social',
        'env/.env.cloud',
      ],
    }),
    DatabaseModule,
    AuthModule,
    UserModule,
  ],
  controllers: [CubeController],
  providers: [CubeService],
  exports: [CubeService],
})
export class CubeModule {}
