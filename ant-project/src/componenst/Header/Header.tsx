import { useNavigate } from "react-router-dom";
import { Menu, Space, Button, Skeleton } from "antd";
import type { MenuProps } from "antd";
import { UserOutlined, HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const Header = () => {
    const navigate = useNavigate();

    const items: MenuProps["items"] = [
        {
            label: "Home",
            key: "/",
        },
        {
            label: "about",
            key: "about",
        },
        {
            label: "Contact",
            key: "contact",
        },
        {
            label: "profile",
            key: "profile",
        },
        {
            label: "product",
            key: "product",
        },
    ];

    return (
        <Space style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: "0 20px" }}>
            <Menu
                onClick={({key}) => {
                    navigate(key)
                }}
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={["/"]}
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
        </Space>
    );
};

export default Header;
