import React from 'react'
import { Layout, Button } from 'antd';

export default function MainPage() {
const { Header, Footer, Content } = Layout;
  return (
    <Layout>
      <Header>Header</Header>
      <Content>
      <Button type="primary">Primary Button</Button>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  )
}
