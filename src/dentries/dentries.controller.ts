import { Controller, Get, Param, Query } from "@nestjs/common";
import { DentriesService } from "./dentries.service";

@Controller("dentries")
export class DentriesController {
    constructor(private readonly dentriesService: DentriesService) {}

    @Get("/random")
    findRandom() {
        return this.dentriesService.findRandom();
    }

    @Get(":id")
    findOneById(@Param("id") id: string) {
        return this.dentriesService.findOneById(+id);
    }

    @Get()
    findOneByParams(
        @Query()
        queryParams: {
            title?: string;
            text?: string;
            actor?: number;
            conversant?: number;
            conversationid?: number;
        },
    ) {
        return this.dentriesService.searchOne(queryParams);
    }
}
