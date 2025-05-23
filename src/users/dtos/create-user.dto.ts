import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class CreateUserDto{

    @IsNumber()
    id: number;


    @IsString({message:"Name should Be a string Value"})
    @IsNotEmpty()
    @MinLength(3,{message: "length should be greater than 3 characters"})
    name: string;

    @IsString()
    @IsOptional()
    gender?: string;

    @IsEmail()
    email: string;
    @IsBoolean()
    isMarried: boolean
}