import { ReactNode } from "react";
import useAuth from '../hooks/useAuth';
import Router from 'next/router';

interface Props {
    children: ReactNode
}

const GuestPanelLayout = ({ children }: Props) => {

    const { user, error, loading } = useAuth();

    if (user) {
        Router.push('/panel')
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