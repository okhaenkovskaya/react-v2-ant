import {Outlet} from "react-router-dom";
import { Layout, Space } from 'antd';
import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css';


import Header from "../componenst/Header/Header.tsx";
import Footer from "../componenst/Footer/Footer.tsx"

const PublicLayout = () => {

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#00b96b',
                    fontSize: 24
                },
            }}
        >
        <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
            <Layout>
                <Header />
                <Outlet />
                <Footer />
            </Layout>
        </Space>
        </ConfigProvider>
    );
};

export default PublicLayout;
