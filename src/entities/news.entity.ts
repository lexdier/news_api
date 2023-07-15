import {Prop} from "@nestjs/mongoose";
import {Schema, Document} from "mongoose";

export class NewsEntity extends Document {
    @Prop({type: Schema.Types.String})
    public title: string

    @Prop({type: Schema.Types.String})
    public description: string

    @Prop({type: Schema.Types.String})
    public url: string

    @Prop({type: Schema.Types.String})
    public author: string

    @Prop({type: Schema.Types.String})
    public source: string

    @Prop({type: Schema.Types.Array})
    public tags: string[]
}