import React from 'react';
import { Form, Input, Button, Typography, Row, Col, message } from 'antd';
import SectionContainer from './SectionContainer';
import Title from './custom/Title';
const { Paragraph } = Typography;

export default function ContactForm() {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    const formName = 'lienhe';
    const encoded = new URLSearchParams({
      'form-name': formName,
      ...values,
    }).toString();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encoded,
    })
      .then(() => {
        message.success('Thông tin của bạn đã được gửi thành công!');
        form.resetFields();
      })
      .catch(() => {
        message.error('Có lỗi xảy ra khi gửi thông tin.');
      });
  };

  return (
    <SectionContainer anchorName="lienhe" backgroundColor={'transparent'}>
      <Row justify="center" gutter={[32, 32]}>
        <Col xs={24} md={16}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <Title level={2} style={{ color: '#f25a30' }}>ĐĂNG KÝ TƯ VẤN</Title>
            <Paragraph style={{ color: '#333333', fontSize: '16px' }}>
              Quý khách vui lòng để lại thông tin, chúng tôi sẽ liên hệ ngay
            </Paragraph>
          </div>
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            name="lienhe"
            data-netlify="true"
            style={{
              background: '#ffffff',
              padding: '32px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
            }}
          >
            <input type="hidden" name="form-name" value="lienhe" />
            <Form.Item
              name="name"
              label="Họ và tên"
              rules={[{ required: true, message: 'Vui lòng nhập họ và tên!' }]}
            >
              <Input size="large" placeholder="Tên của bạn" style={{ borderRadius: '8px' }} />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[{ type: 'email', message: 'Email không hợp lệ!' }]}
            >
              <Input size="large" placeholder="Email của bạn" style={{ borderRadius: '8px' }} />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Số điện thoại"
              rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
            >
              <Input size="large" placeholder="Số điện thoại" style={{ borderRadius: '8px' }} />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                icon={<i className="fas fa-paper-plane" />}
                style={{
                  backgroundColor: '#f25a30',
                  borderColor: '#fdd835',
                  color: '#004d40',
                  borderRadius: '8px',
                  fontWeight: 'bold'
                }}
                block
              >
                GỬI THÔNG TIN
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </SectionContainer>
  );
}
