import { Controller, Get, Param, Query } from "@nestjs/common";
import { ActorsService } from "./actors.service";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { SearchQuery } from "./dto/search-query.dto";
import { Actor } from "./entities/actor.entity";

@ApiTags("actors")
@Controller("actors")
export class ActorsController {
    constructor(private readonly actorsService: ActorsService) {}

    @ApiOkResponse({ type: Actor })
    @Get()
    searchOne(@Query() query: SearchQuery) {
        return this.actorsService.searchOne(query);
    }

    @ApiOkResponse({ type: Actor })
    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.actorsService.findOne(+id);
    }
}
