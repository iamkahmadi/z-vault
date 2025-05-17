import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { mongooseConfig } from './config/mongoose.config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PasswordModule } from './password/password.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration]
    }),
    mongooseConfig,
    UserModule,
    AuthModule,
    PasswordModule,
    // UserModule (next step)
  ],
})
export class AppModule { }

