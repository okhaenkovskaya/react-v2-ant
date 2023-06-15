import { useNavigate } from 'react-router-dom';
import { Layout, Menu, Space, Button, Skeleton } from 'antd';
import type { MenuProps } from 'antd';
import { UserOutlined, HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';





const Header = () => {
    const navigate = useNavigate();

    const items: MenuProps['items'] = [
        {
            label: 'Home',
            key: '/',
        },
        {
            label: 'about',
            key: 'about',
        },
        {
            label: 'Contact',
            key: 'contact',
        },
        {
            label: 'profile',
            key: 'profile',
        },
        {
            label: 'product',
            key: 'product',
        },
    ];

    return (
        <Layout style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Menu
                onClick={({key}) => {
                    navigate(key)
                }}
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['/']}
                items={items}
            />

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
