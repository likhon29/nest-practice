import { Body, Controller, Get, HttpCode, Param, Post } from "@nestjs/common";
import { CatsService } from "./cats.service";
import { CreateCatDto } from "./dto/create-cat.dto";
import { Cat } from "./interface/cat.interface";

@Controller('cats')
export class CatsController {
    // eslint-disable-next-line no-unused-vars
    constructor(private catsService: CatsService) {}

    @Post()
    @HttpCode(201)
    async create(@Body() createCatDto:CreateCatDto) {
        this.catsService.create(createCatDto);

        return {
            success: true,
            statusCode: 201,
            message: 'Cat created successfully',
            data: createCatDto
        };
        
    }
    @Get()
    @HttpCode(200)
    async findAll() {
        return this.catsService.findAll();
    }
    @Get(':id')
     findOne(@Param('id') id: string) :Cat{
        return this.catsService.findOne(id);
    }
}
