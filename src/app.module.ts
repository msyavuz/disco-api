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

        TypeOrmModule.forRoot({
            type: "better-sqlite3",
            database: "disco.db",
            entities: [Actor, Dentry],
            synchronize: false,
        }),

        // ISSUE: https://github.com/tursodatabase/libsql/issues/985
        // TypeOrmModule.forRoot({
        //     type: "sqlite",
        //     database: `libsql://still-green-goblin-msyavuz.turso.io?authToken=${process.env.TOKEN}`,
        //     driver: require("@libsql/sqlite3"),
        //     flags: 0x00000040,
        //     entities: [Actor, Dentry],
        //     synchronize: false,
        // }),
        ActorsModule,
        DentriesModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
