import useAuth from '../../hooks/useAuth';
import { useAppSelector } from '../../hooks/index';
import { selectUser } from '../../store/auth';


const UserInfo = () => {

    const user = useAppSelector(selectUser);
    // const { user } = useAuth();

    return (
        <>
            <h1>user name: {user?.name}</h1>
            <h1>user name:</h1>
        </>
    )

}

export default UserInfo;