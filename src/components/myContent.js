import React from 'react';
import { Layout, Flex,Typography } from 'antd';
import MyLeftMiddleComponent from './myLeftMiddleComponent';
import MyRightMiddleComponent from './myRightMiddleComponent';
import MyMiddleContent from './myMiddleContent';
const { Sider, Content } = Layout;
const { Title } = Typography;
const contentStyle = {
  textAlign: 'center',
  minHeight: 400,
  lineHeight: '120px',
  color: '#fff',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff',
};
const MyContent = () => (
  <Flex gap="middle" wrap="wrap">
      <Layout>
        <Sider width="23%" style={siderStyle}>
        <Title level={5}>路径真实性支撑</Title>
        <Title level={5} style={{ backgroundColor: 'white' }}>路径验证和追溯</Title>
          <MyLeftMiddleComponent></MyLeftMiddleComponent>
        </Sider>
        <Content style={contentStyle}>
            <MyMiddleContent></MyMiddleContent>
        </Content>
        <Sider width="23%" style={siderStyle}>
        <Title level={5}>源地址真实性支撑</Title>
        <Title level={5} style={{ backgroundColor: 'white' }}>源地址验证</Title>
          <MyRightMiddleComponent></MyRightMiddleComponent>
        </Sider>        
      </Layout>
  </Flex>
);
export default MyContent;