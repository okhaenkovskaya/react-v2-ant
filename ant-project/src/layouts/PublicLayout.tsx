import {Outlet} from "react-router-dom";
import { Layout } from "antd";
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";

import Header from "../componenst/Header/Header.tsx";
import Footer from "../componenst/Footer/Footer.tsx"
import Breadcrumbs from "../componenst/Breadcrumbs/Breadcrumbs.tsx";

const PublicLayout = () => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#00b96b",
                    fontSize: 24,
                    borderRadius: 15
                },
            }}
        >
            <Layout>
                <Header />
                <Breadcrumbs/>
                <Outlet />
                <Footer />
            </Layout>
        </ConfigProvider>
    );
};

export default PublicLayout;
