import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument:
      process.env.OBSERVE_APP_KEY && process.env.OBSERVE_APP_SECRET
        ? ObserveInstrument
        : undefined,
  });
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
