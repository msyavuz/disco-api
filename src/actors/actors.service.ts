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

    findOne(id: number): Promise<Actor | null> {
        return this.actorsRepository.findOneBy({ id });
    }

    searchOne(queryParams: {
        name?: string;
        description?: string;
    }): Promise<Actor[]> {
        let queryBuilder = this.actorsRepository.createQueryBuilder("actors");

        if (queryParams.name) {
            queryBuilder = queryBuilder.where("name LIKE :name", {
                name: `%${queryParams.name}%`,
            });
        }
        if (queryParams.description) {
            queryBuilder = queryBuilder.andWhere(
                "description LIKE :description",
                {
                    description: `%${queryParams.description}%`,
                },
            );
        }
        return queryBuilder.getMany();
    }
}
