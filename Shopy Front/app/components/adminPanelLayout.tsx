import { ReactNode } from "react";
import useAuth from '../hooks/useAuth';
import { useRouter } from 'next/router';

interface Props {
    children: ReactNode
}

const AdminPanelLayout = ({ children }: Props) => {
    const router = useRouter();
    const { user, error, loading } = useAuth();

    if (error) {
        router.push('/auth/login');
        return <></>
    }

    if (!user?.is_admin) {
        router.push('/');
        return <></>
    }

    return (
        <div className='w-full text-2xl'>
            This is Admin Layout
            {children}
        </div>
    )
};

export default AdminPanelLayout;