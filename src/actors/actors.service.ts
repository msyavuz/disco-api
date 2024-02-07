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
    findAll(): Promise<Actor[]> {
        return this.actorsRepository.find();
    }

    findOne(id: number): Promise<Actor | null> {
        return this.actorsRepository.findOneBy({ id });
    }
}
