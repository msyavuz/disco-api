import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Dentry } from "./entities/dentry.entity";
import { Repository } from "typeorm";

@Injectable()
export class DentriesService {
    constructor(
        @InjectRepository(Dentry)
        private dentriesRepository: Repository<Dentry>,
    ) {}

    async findRandom(): Promise<Dentry | null> {
        const dentry = await this.dentriesRepository
            .createQueryBuilder("dentries")
            .where("LENGTH(dialoguetext) > 3")
            .orderBy("RANDOM()")
            .limit(1)
            .getOne();
        return dentry;
    }

    findOne(id: number): Promise<Dentry | null> {
        return this.dentriesRepository.findOneBy({ id });
    }
}
