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
            .where("LENGTH(dialoguetext) > :length", { length: 3 })
            .orderBy("RANDOM()")
            .limit(1)
            .getOne();
        return dentry;
    }

    findOneById(id: number): Promise<Dentry | null> {
        return this.dentriesRepository.findOneBy({ id });
    }

    searchOne(queryParams: {
        title?: string;
        text?: string;
        actor?: number;
        conversant?: number;
        conversationid?: number;
    }): Promise<Dentry[] | Dentry> {
        if (
            !queryParams.text &&
            !queryParams.title &&
            !queryParams.actor &&
            !queryParams.conversant &&
            !queryParams.conversationid
        ) {
            return this.findRandom();
        }

        let queryBuilder =
            this.dentriesRepository.createQueryBuilder("dentries");

        if (queryParams.title) {
            queryBuilder = queryBuilder.where("title ILIKE :title", {
                title: `%${queryParams.title}%`,
            });
        }
        if (queryParams.text) {
            queryBuilder = queryBuilder.andWhere("dialoguetext ILIKE :text", {
                text: `%${queryParams.text}%`,
            });
        }
        if (queryParams.actor) {
            queryBuilder = queryBuilder.andWhere("actor = :actor", {
                actor: queryParams.actor,
            });
        }
        if (queryParams.conversant) {
            queryBuilder = queryBuilder.andWhere("conversant = :conversant", {
                conversant: queryParams.conversant,
            });
        }
        if (queryParams.conversationid) {
            queryBuilder = queryBuilder.andWhere(
                "conversationid = :conversationid",
                {
                    conversationid: queryParams.conversationid,
                },
            );
        }
        return queryBuilder.getMany();
    }
}
