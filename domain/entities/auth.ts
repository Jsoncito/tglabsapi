export interface AuthRequestModel {
  email: string;
  password: string;
}

export interface AuthResponseModel {
  name?: string;
  email?: string;
  rol: string;
}
