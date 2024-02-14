import { Controller, Get, Param, Query } from "@nestjs/common";
import { ActorsService } from "./actors.service";

@Controller("actors")
export class ActorsController {
    constructor(private readonly actorsService: ActorsService) {}

    @Get()
    searchOne(@Query() query: { name?: string; description?: string }) {
        return this.actorsService.searchOne(query);
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.actorsService.findOne(+id);
    }
}
