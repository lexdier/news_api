import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MongooseModule} from "@nestjs/mongoose";
import {NewsSchema} from "./news/news.schema";
import {NewsController} from "./news/news.controller";
import {NewsService} from "./news/news.service";

@Module({
    imports: [MongooseModule.forRoot(
        'mongodb+srv://saviolexdier:tMpPLUw0em84mNfx@news.vbinqhb.mongodb.net/'
    ), MongooseModule.forFeature([{name: 'News', schema: NewsSchema}])],
    controllers: [AppController, NewsController],
    providers: [AppService, NewsService],
})
export class AppModule {
}
