import { IsOptional, IsString } from "class-validator";


export class  CreateHashTagDto{

    @IsOptional()
    @IsString()
    name: string

}