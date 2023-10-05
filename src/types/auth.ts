export type FirstField = 'pId' | 'email';

export interface RegisterValues {
  firstName: string;
  lastName: string;
  email: string;
  pId: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

export interface LoginValues {
  email?: string;
  pId?: string;
  password: string;
}

export interface User
  extends Omit<RegisterValues, 'confirmPassword' | 'password'> {
  id: string;
  virtualBalance: number;
}

export interface AuthInitialState {
  registerLoading: boolean;
  loginLoading: boolean;
  authedUser: User | null;
}
