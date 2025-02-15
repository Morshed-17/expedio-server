import { USER_ROLE } from '../User/user.constant';

export type TLoginUser = {
  email: string;
  password: string;
};

export type TRegisterUser = {
  name: string;
  email: string;
  premium: boolean
  mobileNumber: string;
  password: string;
  role: keyof typeof USER_ROLE;
};
