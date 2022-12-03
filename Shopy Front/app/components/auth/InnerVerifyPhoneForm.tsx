import { FormikProps, Form } from "formik";
import Input from '../share/form/Input';
import { VerifyPhoneFormInterFace } from "../../contracts/auth";

const InnerPhoneVerify = (props: FormikProps<VerifyPhoneFormInterFace>) => {

    return (
        <Form className="space-y-6">
            <div>
                <Input name='code' label='Code' />

            </div>

            <div>
                <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Verify
                </button>
            </div>
        </Form>

    )

}

export default InnerPhoneVerify;