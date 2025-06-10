import { Controller,Get,Param,Post, Query,ParseIntPipe, DefaultValuePipe, ValidationPipe, Body, Patch, Delete } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dtos/create-user.dto";


@Controller('users')
export class  UsersController{
  
  

  constructor(private readonly usersService: UsersService){
    
  }


  @Get()
  getUsers(){
    return this.usersService.getAllUsers()

  }

  // @Get(':id')
  // getUserById(@Param('id', ParseIntPipe) param:any){
   
  //   console.log(param)
  //   const data=this.usersService.getUserById(param);
  //   return data

  // }

  @Post()
  createUser(@Body() user:CreateUserDto){
  
    this.usersService.createUser(user)

   
  }

  @Patch()
  updateUser(){
    
  }

  @Delete(':id')
  public async deleteUser(@Param('id',ParseIntPipe) id:number){

    this.usersService.deleteUser(id)

  }



}