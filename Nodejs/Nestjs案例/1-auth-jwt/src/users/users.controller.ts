import { Controller, Get } from '@nestjs/common';
import { Public } from 'src/decorator/auth';

@Controller('users')
export class UsersController {
  @Public()
  @Get()
  findAll() {
    return [];
  }
}
