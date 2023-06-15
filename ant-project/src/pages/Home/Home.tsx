import React from 'react';
import { Col, Row, Breadcrumb, Carousel } from 'antd';

import TabsSection from "../../componenst/Tabs/Tabs.tsx"

const contentStyle: React.CSSProperties = {
    height: '250px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
const HomePage = () => {

  return (
    <Row style={{minHeight:"70vh"}}>
        <Col span={18} push={6}>
            <Breadcrumb
                items={[
                    {
                        title: 'Home',
                    },
                    {
                        title: <a href="">Application Center</a>,
                    },
                    {
                        title: <a href="">Application List</a>,
                    },
                    {
                        title: 'An Application',
                    },
                ]}
            />
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
            </Carousel>
            <TabsSection />
        </Col>
        <Col span={6} pull={18}>
            col-6 col-pull-18
        </Col>
    </Row>
  );
};

export default HomePage;
