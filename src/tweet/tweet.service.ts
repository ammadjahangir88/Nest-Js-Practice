import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class TweetService {

    constructor(private readonly usersService: UsersService){}


    tweets: {text:string,date: Date,userId: number}[]=
        [
            {text:"Some Tweet",date: new Date('2024-11-12'), userId:1},
            {text:"Some Other Tweet ",date: new Date("2025-03-08"),userId:1},
            {text:"Some some Other Tweet",date: new Date("2025-09-19"),userId:3}
        ]
    

    getTweets(userId: number){
        // const user=this.usersService.getUserById(userId);
        

        // let tweets=this.tweets.filter(tweet=> tweet.userId === userId);

        // const response= tweets.map((t)=> {
        //     return {...t, user}
        // })

        // return response;

        

    }
}
