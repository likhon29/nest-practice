import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
  private readonly users = [];
  create(user) {
    this.users.push(user);
  }
}