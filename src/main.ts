import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder();
  config.setTitle('EzanaPay API');
  config.setDescription('EzanaPay API description');
  config.setVersion('1.0');
  config.addTag('ezanapay');
  config.addBearerAuth();

  const document = SwaggerModule.createDocument(app, config.build());
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
