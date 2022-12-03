import { FC, Fragment } from 'react';
import { ErrorMessage, Field } from 'formik';

interface InputProps {
    name: string;
    type?: string;
    label: string;
    inputClassName?: string;
    labelClassName?: string;
    errorClassName?: string;
};

const Input: FC<InputProps> = ({
    name,
    type = 'text',
    label,
    inputClassName,
    labelClassName,
    errorClassName
}) => {
    return (
        <Fragment>
            <label htmlFor={name} className={`${labelClassName} block text-sm font-medium text-gray-700`}>
                {label}
            </label>
            <Field id={name} name={name} type={type} className={`${inputClassName ?? ''} mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`} />
            <ErrorMessage name={name} className={`${errorClassName ?? ''} text-red-500 text-sm`}component='div' />
        </Fragment>
    );
}

export default Input;