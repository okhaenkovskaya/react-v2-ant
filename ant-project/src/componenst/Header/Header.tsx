import { Layout, Menu, Space, Button, Skeleton } from 'antd';
import { useLocation } from 'react-router-dom';
import { UserOutlined, HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const Header = () => {
    const location = useLocation();

    return (
        <Layout style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Menu
                selectedKeys={[location.pathname]}
                theme="dark"
                mode="horizontal"
            >
                <Menu.Item key="/">Home</Menu.Item>
                <Menu.Item key={"/products"}>Products</Menu.Item>
                <Menu.Item key={"/profile"}>Profile</Menu.Item>
            </Menu>

            <Skeleton.Image />

            <Space wrap>
                <Button type="primary">
                    <UserOutlined />
                </Button>
                <Button>
                    <HeartOutlined />
                </Button>
                <Button type="dashed">
                    <ShoppingCartOutlined />
                </Button>
            </Space>
        </Layout>
    );
};

export default Header;
