import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { User } from "./user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Profile } from "src/profile/profile.entity";

@Module({
    providers: [UsersService],
    controllers: [UsersController],
    exports: [UsersService],
    imports: [TypeOrmModule.forFeature([User,Profile])]
})
export class UsersModule{
    

}