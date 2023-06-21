import { useNavigate } from "react-router-dom";
import { Menu, Space, Button, Skeleton } from "antd";
import type { MenuProps } from "antd";
import { UserOutlined, HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";

import { useAppSelector } from "../../hooks";

const Header = () => {
    const navigate = useNavigate();
    const {totalCount} = useAppSelector((state) => state.cart)

    const items: MenuProps["items"] = [
        {
            label: "Home",
            key: "/",
        },
        {
            label: "About",
            key: "about",
        },
        {
            label: "Contact",
            key: "contact",
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
                    {totalCount}
                </Button>
            </Space>
        </Space>
    );
};

export default Header;
