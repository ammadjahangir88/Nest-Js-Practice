import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { TweetService } from './tweet.service';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';

@Controller('tweets')
export class TweetController {

    constructor(private tweetService: TweetService) {
    }
    @Get(':userid')
    public GetTweets(@Param('userid', ParseIntPipe) userid: number) {

        return this.tweetService.getTweets(userid)



    }

    @Post()
    public createTweet(@Body() tweet: CreateTweetDto){
        return this.tweetService.CreateTweet(tweet)
    }

    @Patch()
    public updateTweet(@Body() tweet: UpdateTweetDto)
    {
        this.tweetService.updateTweet(tweet)
    }

    
    @Delete(':id')
    public deleteTweet(@Param('id',ParseIntPipe) id: number){
       
        this.tweetService.deleteTweet(id)
    }
}
