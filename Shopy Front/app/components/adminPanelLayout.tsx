import { ReactNode, useEffect } from 'react';
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

    useEffect(() => {
        if (!user?.is_admin) {
            router.push('/');
        }
    }, [user]);

    return (
        <div className='w-full text-2xl'>
            This is Admin Layout
            {children}
        </div>
    )
};

export default AdminPanelLayout;