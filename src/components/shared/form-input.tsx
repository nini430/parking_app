import { cn } from '../../utils/cn';

interface FormInputProps {
  placeholder: string;
  type?: 'text' | 'password';
  register: any;
  errors: any;
  name: string;
}

const FormInput = ({
  placeholder,
  type = 'text',
  name,
  register,
  errors,
}: FormInputProps) => {
  return (
    <input
      {...register(name)}
      type={type}
      placeholder={placeholder}
      className={cn(
        'border rounded-md p-2 w-full md:w-auto focus-visible:ring-0 focus-visible:outline-none',
        errors[name] && 'border border-red-500 bg-red-100'
      )}
    />
  );
};

export default FormInput;
