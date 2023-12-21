export interface LoginDTO {
  name: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}
export type RegisterDTO = LoginDTO & { email: string };
export type RegisterResponse = LoginResponse;