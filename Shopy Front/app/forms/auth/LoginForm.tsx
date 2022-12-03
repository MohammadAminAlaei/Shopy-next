import { withFormik } from "formik";
import * as yup from 'yup';
import { LoginFormValuesInterFace } from "../../contracts/auth";
import InnerLoginForm from "../../components/auth/InnerLoginForm";
import callApi from "../../helpers/callApi";
import ValidationError from "../../exceptions/validationError";
import Router from "next/router";
import { StringLocale } from "yup/lib/locale";

const phoneRegExp = /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/;
const lognFormValidationSchema = yup.object().shape({
    phone: yup.string().required().min(8).matches(phoneRegExp, 'the phone format is not correct'),
});

interface LoginFormProps {
    setToken: (value: string) => void;
}

const RegisterForm = withFormik<LoginFormProps, LoginFormValuesInterFace>({
    mapPropsToValues: props => {
        return {
            phone: ''
        }
    },
    validationSchema: lognFormValidationSchema,
    handleSubmit: async (values, { props, setFieldError }) => {
        try {
            const res = await callApi().post('/auth/login', values);
            if (res.status === 200) {
                props.setToken(res.data.token);
                Router.push('/auth/login/step-two');
            }
        }
        catch (error) {
            if (error instanceof ValidationError) {
                Object.entries(error.messages).forEach(([key, value]) => setFieldError(key, value as string))
            }
        }
    }
})(InnerLoginForm);

export default RegisterForm;