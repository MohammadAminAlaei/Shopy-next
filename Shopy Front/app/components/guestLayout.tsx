import { ReactNode } from "react";
import useAuth from '../hooks/useAuth';
import { useRouter } from 'next/router';

interface Props {
    children: ReactNode
}

const GuestPanelLayout = ({ children }: Props) => {

    const router = useRouter();

    const { user, error } = useAuth();

    if (user) {
        router.push('/panel')
        return <></>
    }

    return (
        <div className='w-full text-2xl'>
            This is Guest Layout
            {children}
        </div>
    )
};

export default GuestPanelLayout;