export class CreateUserDTO {
  readonly name: string;
  readonly email: string;
  readonly password: string;
};

export class VerifyEmailDTO {
  signupVerifyToken: string;
}

export class UserLoginDTO {
  email: string;
  password: string;
};

export interface UserInfo {
  id : string;
  name: string;
  email: string;
}