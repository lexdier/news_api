import {Injectable} from '@nestjs/common';
import {Model} from 'mongoose'
import {InjectModel} from "@nestjs/mongoose";
import {NewsEntity} from "../entities/news.entity";
import {CreateNewsValidator, UpdateNewsValidator} from "../validators/news.validator";

@Injectable()
export class NewsService {
    constructor(@InjectModel('News') private readonly newsModel: Model<NewsEntity>) {
    }

    public getNews() {
        return this.newsModel.find();
    }

    public getById(id: string) {
        return this.newsModel.findById(id);
    }

    public create(validator: CreateNewsValidator) {
        return this.newsModel.create(validator)
    }

    public async editById(id: string, validator: UpdateNewsValidator) {
        const news: NewsEntity = await this.newsModel.findById(id)

        news.title = validator.title || news.title
        news.url = validator.url || news.url
        news.author = validator.author || news.author
        news.description = validator.description || news.description
        news.tags = validator.tags || news.tags
        news.source = validator.source || news.source

        await news.save()
        return news
    }

    public deleteById(id: string) {
        return this.newsModel.deleteOne({_id: id})
    }
}
