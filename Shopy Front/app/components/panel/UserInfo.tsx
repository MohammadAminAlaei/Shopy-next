import useAuth from '../../hooks/useAuth';
import { useAppSelector } from '../../hooks/index';
import { selectUser } from '../../store/auth';
import { removeLoginToken } from '../../helpers/auth';
import { useRouter } from 'next/router';


const UserInfo = () => {

    const user = useAppSelector(selectUser);
    const router = useRouter();
    // const { user } = useAuth();

    const logOut = async () => {
        await removeLoginToken();
        await router.push('/')
    }

    return (
        <>
            <h1>user name: {user?.name}</h1>

            <button onClick={logOut}>Log Out</button>
        </>
    )

}

export default UserInfo;