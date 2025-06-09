import React from 'react';
import { Form, Input, Button, Typography, Row, Col, message } from 'antd';
import { UserOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import SectionContainer from './SectionContainer';
import Title from './custom/Title';
const { Paragraph } = Typography;

export default function ContactForm() {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log('Thông tin liên hệ:', values);
    message.success('Thông tin của bạn đã được gửi thành công!');
    form.resetFields();
  };

  return (
    <SectionContainer anchorName="lienhe" backgroundColor={"#196352"}>
      <Row justify="space-between" align="middle" gutter={[16, 16]}>
        <Col xs={24} md={10} style={{ textAlign: 'left' }}>
          <Title level={2} style={{ color: '#ffeb3b', marginBottom: '1rem' }}>ĐĂNG KÝ TƯ VẤN</Title>
          <Paragraph style={{ color: '#ffffff' }}>
            Quý khách vui lòng để lại thông tin, chúng tôi sẽ liên hệ ngay
          </Paragraph>
        </Col>
        <Col xs={24} md={14}>
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
          >
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Vui lòng nhập họ và tên!' }]}
            >
              <Input placeholder="Tên của bạn" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[{ type: 'email', message: 'Email không hợp lệ!' }]}
            >
              <Input placeholder="Email của bạn" />
            </Form.Item>
            <Form.Item
              name="phone"
              rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
            >
              <Input placeholder="Số điện thoại" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" size="large" style={{ backgroundColor: '#ffeb3b', borderColor: '#ffeb3b', color: '#004d40' }} block>
                ĐĂNG KÝ NGAY
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </SectionContainer>
  );
}
