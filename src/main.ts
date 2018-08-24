import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';

const NEST_PORT = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  await app.listen(NEST_PORT);
}
bootstrap();
