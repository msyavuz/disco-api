import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

const port = process.env.port || 3000;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix("api/v1");

    console.log(
        `Launching NestJS app on port ${port}, URL: http://0.0.0.0:${port}`,
    );
    await app.listen(3000);
}
bootstrap();
