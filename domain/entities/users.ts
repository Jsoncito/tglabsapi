export interface UsersRequestModel {
  email: string;
  password: string;
  name: string;
  lastName: string;
  lastLogin: string;
  createdAt: string;
}

export interface UsersResponseModel {
  id: string;
  email: string;
  password: string;
  name: string;
  lastName: string;
  lastLogin: string;
  createdAt: string;
}
