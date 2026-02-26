import * as UserTypes from '@api/models/users';
import { APIRequestContext } from '@playwright/test';

export class UserClient {
  private readonly request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  //OR: constructor (private readonly request: APIRequestContext) {} instead of lines (5 -> 9)

  async listUsers(limit = 10, skip = 0) {
    const response = await this.request.get('/users', {params: { limit, skip },});

    const body: UserTypes.UsersListResponse = await response.json();
    return { response, body };
  }

  async getUser(id: number) {
  const response = await this.request.get(`/users/${id}`);

    const body: UserTypes.User = await response.json();
    return { response, body };
  }

  async createUser(payload: UserTypes.CreateUserRequest) {
    const response = await this.request.post('/users/add', { data: payload });

    const body: UserTypes.CreateUserResponse = await response.json();
    return { response, body };
  }

  async deleteUser(id: number) {
    const response = await this.request.delete(`/users/${id}`);

    const body: UserTypes.DeleteUserResponse = await response.json();
    return { response, body };
  }

  async updateUser(id: number, payload: UserTypes.UpdateUserRequest) {
    const response = await this.request.put(`/users/${id}`, {data: payload,});

    const body: UserTypes.User = await response.json();
    return { response, body };
  }
}