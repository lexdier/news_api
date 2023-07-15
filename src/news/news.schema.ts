import {Schema} from 'mongoose';

export const NewsSchema = new Schema({
    title: String,
    description: String,
    url: String,
    author: String,
    source: String,
    tags: Array
})
