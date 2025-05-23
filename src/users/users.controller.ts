import { Controller,Get,Param,Post, Query,ParseIntPipe, DefaultValuePipe, ValidationPipe, Body, Patch } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dtos/create-user.dto";


@Controller('users')
export class  UsersController{
  
  

  constructor(private readonly usersService: UsersService){
    
  }


  @Get()
  getUsers(@Query('page' ,new DefaultValuePipe(1),ParseIntPipe )  page:number, @Query('limit', new DefaultValuePipe(10),ParseIntPipe) limit: number ){
 
      console.log('The page is',page,"And the Limit is",limit)
      return this.usersService.getAllUsers(page,limit)
  
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) param:any){
   
    console.log(param)
    const data=this.usersService.getUserById(param);
    return data

  }

  @Post()
  createUser(@Body() user:CreateUserDto){
  
    console.log("The User is",user)
    // this.usersService.createUser(user)

    return "A new User has been created"
  }

  @Patch()
  updateUser(){
    
  }
}