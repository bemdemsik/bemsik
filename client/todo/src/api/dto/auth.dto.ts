export interface LoginDTO {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  id: number;
}
export type RegisterDTO = LoginDTO & { name: string };
export type RegisterResponse = LoginResponse;