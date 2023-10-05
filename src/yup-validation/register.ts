import { ObjectSchema, string, object, ref } from 'yup';

import { RegisterValues } from '../types/auth';

const registerValidationSchema: ObjectSchema<RegisterValues> = object({
  firstName: string().required('required_field'),
  lastName: string().required('required_field'),
  email: string().required('required_field').email('invalid_email'),
  pId: string()
    .required('required_field')
    .matches(/^[0-9]*$/, { message: 'only_numbers' })
    .test({ name: 'len', test: (val) => val.length === 11, message: '11-len' }),
  phoneNumber: string()
    .required('required_field')
    .matches(/^[0-9]*$/, { message: 'only_numbers' })
    .test({ name: 'len', test: (val) => val.length === 9, message: '9-len' }),
  password: string()
    .required('required_field')
    .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, {
      message: 'invalid_password',
    }),
  confirmPassword: string()
    .required('required_field')
    .oneOf([ref('password')], 'password_must_match'),
});

export { registerValidationSchema };
