import Cookies from 'universal-cookie';

const storeLoginToken = (token: string, days: number = 10) => {
    const cookies = new Cookies();

    cookies.set('shopy_token', token,
        {
            path: '/',
            maxAge: (days * 24 * 60 * 3600),

        }
    );
}

const removeLoginToken = () => {

}

export { storeLoginToken, removeLoginToken };

