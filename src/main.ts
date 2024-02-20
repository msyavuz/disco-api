import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

const port = process.env.PORT || 3000;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix("api/v1");
    app.enableCors();

    const config = new DocumentBuilder()
        .setTitle("Disco API")
        .setVersion("1.0")
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("docs", app, document);

    console.log(
        `Launching NestJS app on port ${port}, URL: http://0.0.0.0:${port}`,
    );
    await app.listen(port);
}
bootstrap();
