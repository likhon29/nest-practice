// import { Controller, Get, HttpCode, Post } from "@nestjs/common";
// import { UsersService } from "./users.service";


// @Controller('users')
// export class UsersController {
//     constructor(private readonly usersService: UsersService) {
//     }

//     @Post()
//     @HttpCode(201)
//     async create() {
//         this.usersService.create();
//         return {
//             success: true,
//             statusCode: 201,
//             message: 'User created successfully',
//         }

//     @Get()
//     @HttpCode(200)
//     async findAll() {
//         return this.usersService.findAll();
//     }
// }
// }
