import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'admin',
      password: 'admin',
    },
    {
      userId: 2,
      username: 'user',
      password: 'user',
    },
  ];

  async findOne(username: string): Promise<any> {
    return this.users.find((user) => user.username === username);
  }
}
