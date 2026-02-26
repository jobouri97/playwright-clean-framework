// src/api/models/users.ts

export type UserRole = 'admin' | 'moderator' | 'user';
export type Gender = 'male' | 'female';

export type User = {
  id: number;

  firstName: string;
  lastName: string;
  age: number;

  gender?: Gender;
  email?: string;
  phone?: string;
  username?: string;
  image?: string;

  role?: UserRole;
};

// GET /users?limit=&skip=
export type UsersListResponse = {
  users: User[];
  total: number;
  skip: number;
  limit: number;
};

// POST /users/add
export type CreateUserRequest = {
  firstName: string;
  lastName: string;
  age: number;
  // ممكن تضيف حقول إضافية لاحقًا حسب حاجتك
};

export type CreateUserResponse = User;

// PUT/PATCH /users/:id
export type UpdateUserRequest = Partial<CreateUserRequest>;

// DELETE /users/:id
export type DeleteUserResponse = User & {
  isDeleted: true;
  deletedOn: string; // ISO time
};