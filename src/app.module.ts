import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ActorsModule } from "./actors/actors.module";
import { Actor } from "./actors/entities/actor.entity";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "better-sqlite3",
            database: "disco.db",
            entities: [Actor],
            synchronize: true,
        }),
        ActorsModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
