import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ActorsModule } from "./actors/actors.module";
import { Actor } from "./actors/entities/actor.entity";
import { DentriesModule } from "./dentries/dentries.module";
import { Dentry } from "./dentries/entities/dentry.entity";
import { ConfigModule } from "@nestjs/config";

@Module({
    imports: [
        ConfigModule.forRoot(),

        // TODO: Change usage of local or remote db with env

        // NOTE: For use with local db
        // TypeOrmModule.forRoot({
        //     type: "better-sqlite3",
        //     database: "disco.db",
        //     entities: [Actor, Dentry],
        //     synchronize: false,
        // }),

        TypeOrmModule.forRoot({
            type: "postgres",
            url: process.env.DB_URL,
            entities: [Actor, Dentry],
            synchronize: false,
        }),
        ActorsModule,
        DentriesModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
