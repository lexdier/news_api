import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {cors: true});
    const config = new DocumentBuilder()
        .setTitle('Crypto.api')
        .setDescription('This is the Crypto API')
        .setVersion('1.0')
        .build();

    const document = SwaggerModule.createDocument(app, config);

    app.useGlobalPipes(new ValidationPipe());
    SwaggerModule.setup('', app, document);

    await app.listen(5000);
}

bootstrap();
