import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Actor } from "./entities/actor.entity";
import { Repository } from "typeorm";

@Injectable()
export class ActorsService {
    constructor(
        @InjectRepository(Actor)
        private actorsRepository: Repository<Actor>,
    ) {}

    async findRandom(): Promise<Actor | null> {
        const dentry = await this.actorsRepository
            .createQueryBuilder("actors")
            .orderBy("RANDOM()")
            .limit(1)
            .getOne();
        return dentry;
    }

    findOne(id: number): Promise<Actor | null> {
        return this.actorsRepository.findOneBy({ id });
    }

    searchOne(queryParams: {
        name?: string;
        description?: string;
    }): Promise<Actor[] | Actor> {
        if (!queryParams.name && !queryParams.description) {
            return this.findRandom();
        }

        let queryBuilder = this.actorsRepository.createQueryBuilder("actors");

        if (queryParams.name) {
            queryBuilder = queryBuilder.where("name ILIKE :name", {
                name: `%${queryParams.name}%`,
            });
        }
        if (queryParams.description) {
            queryBuilder = queryBuilder.andWhere(
                "description ILIKE :description",
                {
                    description: `%${queryParams.description}%`,
                },
            );
        }
        return queryBuilder.getMany();
    }
}
