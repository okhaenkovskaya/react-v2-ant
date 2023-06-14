import { Layout, Space,Button } from 'antd';
import Header from "../componenst/Header/Header.tsx";

const PublicLayout = () => {
    const { Footer, Content } = Layout;

    return (
        <div>
            <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
                <Layout>

                    <Header />
                    <Content>Content</Content>
                    <Footer />
                </Layout>
            </Space>
        </div>
    );
};

export default PublicLayout;
