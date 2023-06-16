import { Col, Row } from "antd";
import { Typography } from "antd";

const { Title, Text, Link } = Typography;

import TabsSection from "../../componenst/Tabs/Tabs.tsx"
import Gallery from "../../componenst/Gallery/Gallery.tsx";

const HomePage = () => {

  return (
    <Row style={{minHeight:"70vh", padding:"20px"}}>
        <Col span={18} push={6}>
            <Gallery/>
            <Title>h1. Ant Design</Title>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta similique totam voluptatibus! Consectetur distinctio, quam. Accusamus cupiditate distinctio, dolorem molestiae nisi qui sed tempore temporibus. Doloribus impedit optio rerum tenetur?
                <Link href="https://ant.design" target="_blank">
                    Ant Design (Link)
                </Link>
            </Text>
            <Title level={2}>h2. Ant Design</Title>
            <Text type="success">Lorem ipsum dolor sit amet. </Text>
            <Link href="https://ant.design" target="_blank">
                Ant Design (Link)
            </Link>
        </Col>
        <Col span={6} pull={18}>
            <TabsSection />
        </Col>
    </Row>
  );
};

export default HomePage;
