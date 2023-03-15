import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './api/auth/auth.module';
// -----| [ VALIDATION ]
import * as Joi from 'joi';
// -----| [ GUARDS ]
import { JwtAuthGuard } from './api/auth/guards/jwt.guard';
// -----| [ CONFIGURATIONS ]
import discordConfig from './config/social/discord.config';
import twitchConfig from './config/social/twitch.config';
import twitterConfig from './config/social/twitter.config';
// -----| [ APPLICATION MODULES ]
import { UserModule } from './api/user/user.module';
import { CubeModule } from '../../cube/src/cube.module';
import { SocialModule } from '../../social/src/social.module';
import { MediaModule } from '../../media/src/media.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [discordConfig, twitchConfig, twitterConfig],
      envFilePath: [
        '.env',
        '/env/.env.cloud',
        '/env/.env.payment',
        '/env/.env.server',
        '/env/.env.social',
      ],
      validationSchema: Joi.object({
        // DATABASE VALIDATION
        DATABASE_HOST: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
        DATABASE_USER: Joi.string().required(),
        DATABASE_PASSWORD: Joi.string().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_SCHEMA: Joi.string().required(),
        // JWT VALIDATION
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRATION_TIME: Joi.string().required(),
        // PORT VALIDATION
        NODE_PORT: Joi.number().required(),
      }),
    }),
    DatabaseModule,
    AuthModule,
    UserModule,
    CubeModule,
    SocialModule,
    MediaModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
