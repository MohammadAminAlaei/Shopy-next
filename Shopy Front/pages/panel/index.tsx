import { useEffect, useState } from "react";
import UserInfo from "../../app/components/panel/UserInfo";
import UserPanelLayout from "../../app/components/userPanelLayout";
import { NextPageWithLayout } from "../_app";

const Panel: NextPageWithLayout = () => {

    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, []);

    if (loading) return <div> Loading... </div>

    return (
        <div>
            <UserInfo />
        </div>
    )
};

Panel.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>

export default Panel;