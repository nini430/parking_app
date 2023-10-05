import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Link } from 'react-router-dom';
import FormInput from '../components/shared/form-input';
import { RegisterValues } from '../types/auth';
import { registerValidationSchema } from '../yup-validation/register';

const RegisterPage = () => {
  const form = useForm<RegisterValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      pId: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(registerValidationSchema),
    mode: 'onTouched',
  });

  const { isSubmitting, isValid, errors } = form.formState;
  const onSubmit = async (values: RegisterValues) => {
    console.log(values);
  };
  return (
    <div className="flex justify-center items-center h-[calc(100vh-80px)]">
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="p-3 rounded-md w-[90%] md:w-[450px] shadow-md space-y-4 space-x-1"
      >
        <h1 className="text-center font-semibold text-2xl text-main-green">
          Sign Up
        </h1>
        <FormInput
          name="firstName"
          register={form.register}
          errors={errors}
          placeholder="First Name"
        />
        <FormInput
          name="lastName"
          register={form.register}
          errors={errors}
          placeholder="Last Name"
        />
        <FormInput
          name="email"
          register={form.register}
          errors={errors}
          placeholder="E-mail"
        />
        <FormInput
          name="pId"
          register={form.register}
          errors={errors}
          placeholder="Personal Id"
        />
        <FormInput
          name="phoneNumber"
          register={form.register}
          errors={errors}
          placeholder="Phone Number"
        />
        <FormInput
          name="password"
          register={form.register}
          errors={errors}
          type="password"
          placeholder="Password"
        />
        <FormInput
          name="confirmPassword"
          register={form.register}
          errors={errors}
          type="password"
          placeholder="Confirm Password"
        />
        <br />
        <span className="font-light">
          Already have an account?{' '}
          <Link to="/login" className="underline text-main-green">
            Sign In
          </Link>
        </span>
        <button
          disabled={isSubmitting || !isValid}
          className="w-full border rounded-md p-2 transition hover:opacity-75 bg-main-green text-white"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
