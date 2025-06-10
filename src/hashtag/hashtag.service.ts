import { Injectable } from '@nestjs/common';
import { Repository, In } from 'typeorm';
import { Hashtag } from './hasttag.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateHashTagDto } from './dto/create-hashtag.dto';


@Injectable()
export class HashtagService {

    constructor(
        @InjectRepository(Hashtag)
        private readonly hashTagRepository: Repository<Hashtag>
    ){
        
    }

    public async createHashTag(createHashTagDto: CreateHashTagDto){
        console.log("Create Hash tag us",createHashTagDto)
        let hashtag=this.hashTagRepository.create(createHashTagDto)

        return await this.hashTagRepository.save(hashtag)

    }

    public async findHashTags(hashtags: number[]){

        
        return await this.hashTagRepository.find({
            where: {
                id: In(hashtags)
            }
        })

    }
}
