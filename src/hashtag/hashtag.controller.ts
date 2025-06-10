import { Body, Controller, Injectable, Post } from '@nestjs/common';
import { CreateHashTagDto } from './dto/create-hashtag.dto';
import { HashtagService } from './hashtag.service';


@Controller('hashtag')
export class HashtagController {
    constructor(private readonly hashTagService: HashtagService){

    }
    @Post()
    public async CreateNewHashTag(@Body() createHashTagDto:CreateHashTagDto){

        return this.hashTagService.createHashTag(createHashTagDto)

    }

  
}
