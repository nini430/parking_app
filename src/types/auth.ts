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
