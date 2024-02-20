import { Controller, Get, Param, Query } from "@nestjs/common";
import { DentriesService } from "./dentries.service";
import { ApiTags } from "@nestjs/swagger";
import { SearchQuery } from "./dto/search-query.dto";

@ApiTags("dentries")
@Controller("dentries")
export class DentriesController {
    constructor(private readonly dentriesService: DentriesService) {}

    @Get(":id")
    findOneById(@Param("id") id: string) {
        return this.dentriesService.findOneById(+id);
    }

    @Get()
    findOneByParams(
        @Query()
        queryParams: SearchQuery,
    ) {
        return this.dentriesService.searchOne(queryParams);
    }
}
