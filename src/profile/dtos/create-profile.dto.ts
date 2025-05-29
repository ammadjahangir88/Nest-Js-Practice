import { IsBoolean, IsDate, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class createProfileDto{
    @IsString({message:"First Name should Be a string Value"})
    @IsOptional()
    @MinLength(3,{message: "length should be greater than 3 characters"})
    firstName?: string;


    @IsString({message:"Last Name should Be a string Value"})
    @IsOptional()
    @MinLength(3,{message: "length should be greater than 3 characters"})
    lastName?: string;

    @IsString()
    @IsOptional()
    gender?: string;


    @IsDate()
    @IsOptional()
    dateOfBirth?: Date


    @IsString()
    @IsOptional()
    bio: string

    @IsString()
    @IsOptional()
    profileImage: string;
}