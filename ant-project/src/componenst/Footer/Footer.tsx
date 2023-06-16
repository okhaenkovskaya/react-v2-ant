import { useState, useMemo } from "react";
import { InstagramOutlined, FacebookOutlined, MailOutlined } from "@ant-design/icons";
import { Space, Typography, Menu } from "antd";
import type { MenuProps } from "antd";

const items: MenuProps["items"] = [
    {
        label: "Facebook",
        key: "Facebook",
        icon: <FacebookOutlined />,
    },
    {
        label: "Instagram",
        key: "Instagram",
        icon: <InstagramOutlined />,
        disabled: true,
    },
    {
        label: "Mail",
        key: "mail",
        icon: <MailOutlined />,
    },
];


const Footer = () => {
    const { Text, Paragraph, Title} = Typography;

    const [editableStrWithSuffix, setEditableStrWithSuffix] = useState(
        "This is a loooooooooooooooooooooooooooooooong editable text with suffix.",
    );
    const [editableStrWithSuffixStartPart, editableStrWithSuffixSuffixPart] = useMemo(
        () => [editableStrWithSuffix.slice(0, -12), editableStrWithSuffix.slice(-12)],
        [editableStrWithSuffix],
    );

    return (
        <Space direction="vertical" style={{ textAlign: "center" }}>
            <Menu mode="horizontal"  style={{ display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center" }} theme="dark" items={items} />

            <Title level={2}>
                h2. Ant Design
            </Title>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, amet aut blanditiis cupiditate in itaque labore modi nisi obcaecati optio quas quos repellat sequi tempora voluptas! Hic iusto quis ullam?</Text>
            <Text type="success">Lorem ipsum dolor sit amet, consectetur adipisicing elit. (success)</Text>

            <Paragraph
                editable={{
                    onChange: setEditableStrWithSuffix,
                    text: editableStrWithSuffix,
                }}
                ellipsis={{
                    suffix: editableStrWithSuffixSuffixPart,
                }}
            >
                {editableStrWithSuffixStartPart}
            </Paragraph>
        </Space>
    );
};

export default Footer;
