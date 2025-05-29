import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";
import { createProfileDto } from "src/profile/dtos/create-profile.dto";

export class CreateUserDto {

    @IsString({ message: "First Name should Be a string Value" })
    @IsNotEmpty()
    @MinLength(3, { message: "length should be greater than 3 characters" })
    userName: string;



    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(8, { message: "length should be greater than 8 characters" })
    password: string


    @IsOptional()
    profile: createProfileDto


}