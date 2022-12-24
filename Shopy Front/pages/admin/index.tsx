import { useEffect, useState } from "react";
import AdminPanelLayout from "../../app/components/adminPanelLayout";
import { NextPageWithLayout } from "../_app";

const adminPanel: NextPageWithLayout = () => {

    const [loading, setLoading] = useState<boolean>(true);


    if (loading) return <div> Loading... </div>

    return (
        <div>
            <h1> YOUR DASHBOyyyyyyARDDDDDDDD </h1>
        </div>
    )
};

adminPanel.getLayout = (page) => <AdminPanelLayout>{page}</AdminPanelLayout>

export default adminPanel;