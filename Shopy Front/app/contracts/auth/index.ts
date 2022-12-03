export interface LoginFormValuesInterFace {
    phone: string;
}

export interface RegisterFormValuesInterFace {
    name: string;
    phone: string;
}

export interface VerifyPhoneFormInterFace {
    code: string;
    token?: string;
}
