import { Controller, Get, Param } from "@nestjs/common";
import { ActorsService } from "./actors.service";

@Controller("actors")
export class ActorsController {
    constructor(private readonly actorsService: ActorsService) {}

    @Get()
    findAll() {
        return this.actorsService.findAll();
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.actorsService.findOne(+id);
    }
}
