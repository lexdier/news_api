import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {NewsService} from "./news.service";
import {CreateNewsValidator, UpdateNewsValidator} from '../validators/news.validator'

@Controller('')
export class NewsController {

    constructor(private newsServices: NewsService) {
    }

    @Get('/news')
    public all() {
        return this.newsServices.getNews();
    }

    @Get('news/:id')
    public getById(@Param('id') id: string) {
        return this.newsServices.getById(id)
    }

    @Post('news')
    public create(@Body() validator: CreateNewsValidator) {
        return this.newsServices.create(validator)
    }

    @Put('news/:id')
    public editById(@Param('id') id: string, @Body() validator: UpdateNewsValidator) {
        return this.newsServices.editById(id, validator)
    }

    @Delete('news/:id')
    public deleteById(@Param('id') id: string) {
        return this.newsServices.deleteById(id)
    }

}
