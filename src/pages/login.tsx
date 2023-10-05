import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-hot-toast';

import FormInput from '../components/shared/form-input';
import { useState } from 'react';
import { FirstField, LoginValues } from '../types/auth';
import { loginValidationSchema } from '../yup-validation/login';
import { useAppDispatch, useAppSelector } from '../store/store';
import { loginUser } from '../store/authReducer';

const Login = () => {
  const dispatch = useAppDispatch();
  const { loginLoading } = useAppSelector((state) => state.auth);
  const [firstField, setFirstField] = useState<FirstField>('email');
  const form = useForm<LoginValues>({
    defaultValues: {
      email: '',
      pId: '',
      password: '',
    },
    resolver: yupResolver(loginValidationSchema(firstField)) as any,
    mode: 'onTouched',
  });
  const { isSubmitting, isValid, errors } = form.formState;
  const onSubmit = async (values: LoginValues) => {
    dispatch(
      loginUser({
        input: values,
        onSuccess: () => {
          toast.success('User logged in');
        },
      })
    );
  };
  return (
    <div className="flex justify-center items-center h-[calc(100vh-80px)]">
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        noValidate
        className="flex flex-col space-y-4 space-x-1 shadow-md p-3 w-[90%] md:w-[450px]"
      >
        <h1 className="text-center font-semibold text-2xl text-main-green">
          Sign In
        </h1>
        {firstField === 'email' && (
          <FormInput
            name="email"
            register={form.register}
            errors={errors}
            placeholder="E-mail"
          />
        )}
        {firstField === 'pId' && (
          <FormInput
            name="pId"
            register={form.register}
            errors={errors}
            placeholder="Personal Id"
          />
        )}
        <p className="font-light">
          Change to{' '}
          <span
            onClick={() =>
              setFirstField((prev) => (prev === 'email' ? 'pId' : 'email'))
            }
            className="cursor-pointer underline"
          >
            {firstField === 'email' ? 'Personal Id' : 'E-mail'}
          </span>{' '}
        </p>
        <FormInput
          register={form.register}
          errors={errors}
          name="password"
          type="password"
          placeholder="Password"
        />
        <br />
        <span className="font-light">
          Don&apos;t you have an account?{' '}
          <Link className="text-main-green underline" to="/register">
            Sign Up
          </Link>
        </span>
        <button
          disabled={isSubmitting || !isValid || loginLoading}
          className="border bg-main-green p-2 rounded-md text-white transition hover:opacity-75"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
