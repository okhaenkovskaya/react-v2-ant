import { useNavigate, Link } from "react-router-dom";
import { Menu, Space, Button } from "antd";
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
        {
            label: "Cart",
            key: "cart",
        },
    ];

    return (
        <Space style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: "0 20px" }}>
            <Menu
                onClick={({key}) => {
                    navigate(key)
                }}
                mode="horizontal"
                theme="dark"
                defaultSelectedKeys={["/"]}
                items={items}
            />


            <Space wrap>
                <Button type="primary">
                    <UserOutlined />
                </Button>
                <Button>
                    <HeartOutlined />
                </Button>
                <Button type="dashed">
                    <Link to="/cart">
                        <ShoppingCartOutlined />
                        {totalCount}
                    </Link>
                </Button>
            </Space>
        </Space>
    );
};

export default Header;
