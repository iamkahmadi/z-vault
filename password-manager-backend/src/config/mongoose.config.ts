import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

export const mongooseConfig = MongooseModule.forRootAsync({
  useFactory: (configService: ConfigService) => ({
    uri: configService.get<string>('MONGO_URI'),
  }),
  inject: [ConfigService],
});
