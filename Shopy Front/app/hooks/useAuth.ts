import Cookies from 'universal-cookie';
import useSWR from 'swr';
import callApi from '../helpers/callApi';

const useAuth = () => {
    const cookie = new Cookies();
    const { data, error } = useSWR('my_user', () => {
        return callApi().get('/user', {
            headers: {
                authorization: cookie.get('shopy_token')
            }
        })
    });
    return { user: data?.data?.user, error, loading: !data && !error }
};

export default useAuth;