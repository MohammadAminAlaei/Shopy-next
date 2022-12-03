import { FormikProps, Form, withFormik } from "formik";
import * as yup from 'yup';
import { VerifyPhoneFormInterFace } from "../../contracts/auth";
import InnerPhoneVerifyPhone from "../../components/auth/InnerVerifyPhoneForm";
import callApi from "../../helpers/callApi";
import ValidationError from "../../exceptions/validationError";
import Router from "next/router";
import { storeLoginToken } from "../../helpers/auth";

const PhoneVerifyValidationSchema = yup.object().shape({
    code: yup.string().required().matches(/^[0-9]+$/, 'فقط میتوانید عدد وارد کنید ').length(6),
});

interface PhoneVerifyFormProps {
    token?: string;
    clearToken: () => void;
}

const PhoneVerifyForm = withFormik<PhoneVerifyFormProps, VerifyPhoneFormInterFace>({
    mapPropsToValues: props => {
        return {
            code: '',
            token: props.token
        }
    },
    validationSchema: PhoneVerifyValidationSchema,
    handleSubmit: async (values, { props, setFieldError }) => {
        try {
            const res = await callApi().post('/auth/login/verify-phone', values)
            if (res.status === 200) {
                // clear Phone Token
                storeLoginToken(res.data?.user?.token)
                await Router.push('/panel')
                props.clearToken();
            }
        }
        catch (error) {
            if (error instanceof ValidationError) {
                Object.entries(error.messages).forEach(([key, value]) => setFieldError(key, value as string))
            }
        }
    }
})(InnerPhoneVerifyPhone)

export default PhoneVerifyForm;