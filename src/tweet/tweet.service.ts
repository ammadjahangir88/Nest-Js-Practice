import { Injectable, ParseIntPipe, Patch } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { Tweet } from './tweet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { HashtagService } from 'src/hashtag/hashtag.service';
import { UpdateTweetDto } from './dto/update-tweet.dto';

@Injectable()
export class TweetService {

    constructor(private readonly usersService: UsersService
        ,
        @InjectRepository(Tweet)
        private readonly tweetRepository: Repository<Tweet>,

        private readonly hashtagService: HashtagService
    ) { }


    tweets: { text: string, date: Date, userId: number }[] =
        [
            { text: "Some Tweet", date: new Date('2024-11-12'), userId: 1 },
            { text: "Some Other Tweet ", date: new Date("2025-03-08"), userId: 1 },
            { text: "Some some Other Tweet", date: new Date("2025-09-19"), userId: 3 }
        ]


    public async getTweets(userId: number) {

        return await this.tweetRepository.find({
            where: {
                user: { id: userId },

            },
            relations: { user: true }
        })

    }

    public async CreateTweet(createTweetDto: CreateTweetDto) {
        // Find the user with the given userId from the users Table

        let user = await this.usersService.FindUserById(createTweetDto.userId)


        // Fetch All the hashtags
        let hashtags = await this.hashtagService.findHashTags(createTweetDto.hashtags)


        // Create a tweet



        let tweet = await this.tweetRepository.create({ ...createTweetDto, user: user, hashtags: hashtags })



        // Save the tweet

        return await this.tweetRepository.save(tweet);

    }


    public async updateTweet(updateTweetDto: UpdateTweetDto) {

        // Find all the hashtags

        let hashtags = await this.hashtagService.findHashTags(updateTweetDto.hashtags || []);


        // Find the tweet by Id

        let tweet = await this.tweetRepository.findOneBy({ id: updateTweetDto.id })
        if (!tweet) {
            return "Tweet not find"
        }
        if (updateTweetDto.text) {
            tweet.text = updateTweetDto.text;
        }
        // Handle hashtags if provided
        if (updateTweetDto.hashtags) {
            const hashtags = await this.hashtagService.findHashTags(updateTweetDto.hashtags);
            tweet.hashtags = hashtags;
        }




        return await this.tweetRepository.save(tweet);



    }

    public async deleteTweet( id: number){
        await this.tweetRepository.delete({
            id:id
        })

        return {deleted: true, id}

    }
}
