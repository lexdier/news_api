import {IsArray, IsNotEmpty, IsOptional, IsString} from "class-validator";

export class CreateNewsValidator {

    @IsNotEmpty()
    @IsString()
    readonly title: string;

    @IsNotEmpty()
    @IsString()
    readonly description: string;

    @IsNotEmpty()
    @IsString()
    readonly url: string;

    @IsNotEmpty()
    @IsString()
    readonly author: string;

    @IsNotEmpty()
    @IsString()
    readonly source: string;

    @IsArray()
    readonly tags: string[];
}

export class UpdateNewsValidator {

    @IsOptional()
    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    description: string;

    @IsOptional()
    @IsString()
    url: string;

    @IsOptional()
    @IsString()
    author: string;

    @IsOptional()
    @IsString()
    tags: string[];

    @IsOptional()
    @IsString()
    source: string;
}
