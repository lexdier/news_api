import {IsOptional, IsString} from "class-validator";

export class CreateNewsValidator {

    @IsString()
    readonly title: string;

    @IsString()
    readonly description: string;

    @IsString()
    readonly url: string;

    @IsString()
    readonly author: string;

    @IsString()
    readonly source: string;

    @IsString()
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
