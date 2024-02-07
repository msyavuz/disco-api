import { Module } from "@nestjs/common";
import { DentriesService } from "./dentries.service";
import { DentriesController } from "./dentries.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Dentry } from "./entities/dentry.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Dentry])],
    controllers: [DentriesController],
    providers: [DentriesService],
})
export class DentriesModule {}
