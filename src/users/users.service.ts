import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "./dtos/create-user.dto";
import { Profile } from "src/profile/profile.entity";


@Injectable()
export class UsersService {
  
    constructor(
     @InjectRepository(User)   
     private userRepository: Repository<User>,


     @InjectRepository(Profile)   
     private profileRepository: Repository<Profile>
    
    
    
    
    
    )
     
     
     
     {
        
    }
    getAllUsers() {

        return this.userRepository.find()
       
    }



    public async createUser(userDto: CreateUserDto) {
       
        let user=this.userRepository.create(userDto)
        return await this.userRepository.save(user)
       
    }

    public async deleteUser(id: number){
      
        // Delete the User
        await this.userRepository.delete(id);
       


        // send a response


        return {deleted: true}
    }

    public async FindUserById(id: number){
        const user = await this.userRepository.findOneBy({id});
        
        if (!user) {
            throw new Error(`User with id ${id} not found`);
        }
        
        return user;
    }
}