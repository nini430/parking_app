import { object, string } from 'yup';
import { FirstField } from '../types/auth';

const EMAIL_REGEX =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
const ID_REGEX = /^[0-9]*$/;

const loginValidationSchema = (firstField: FirstField) =>
  object().shape({
    [firstField]: string()
      .required('required_field')
      .matches(firstField === 'email' ? EMAIL_REGEX : ID_REGEX, {
        message: `Invalid ${firstField === 'email' ? 'Email' : 'Id'}`,
      })
      .test({
        name: 'len',
        test:
          firstField === 'email'
            ? (val) => val.length === val.length
            : (val) => val.length === 11,
        message: firstField === 'email' ? '' : 'len-11',
      }),
    password: string().required('required_field'),
  });

export { loginValidationSchema };
