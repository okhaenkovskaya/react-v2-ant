import { Button, Checkbox, Form, Input } from "antd";

const onFinish = (values: any) => {
    console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
};

const ContactPage = () => {
  return (
    <>
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600, margin: "100px auto" }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: "Please input your username!" }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: "Please input your password!" }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" size="large" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    </>
  );
};

export default ContactPage;
