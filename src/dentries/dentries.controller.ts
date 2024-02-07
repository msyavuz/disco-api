import { Controller, Get, Param } from "@nestjs/common";
import { DentriesService } from "./dentries.service";

@Controller("dentries")
export class DentriesController {
    constructor(private readonly dentriesService: DentriesService) {}

    @Get()
    findRandom() {
        return this.dentriesService.findRandom();
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.dentriesService.findOne(+id);
    }
}
