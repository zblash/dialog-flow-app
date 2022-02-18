export interface IExceptionResponse {
  status: string;
  timestamp: Date;
  message: string;
  path: string;
  subErrors: ISubErrorResponse[] | undefined;
}
export interface ISubErrorResponse {
  object: string;
  field: string;
  rejectedValue: string;
  message: string;
}

export interface IRegisterRequest {
  username: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface IRegisterResponse {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
}

export interface IBaseUser extends IRegisterResponse {
  exp: number;
}

export interface ILoginResponse {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  token: string;
}
