import React from 'react';
import { Typography, Row, Col, Divider } from 'antd';
import {
  CheckCircleOutlined,
  DollarCircleOutlined,
  GiftOutlined,
  StarOutlined,
} from '@ant-design/icons';
import SectionContainer from './SectionContainer';
import Title from './custom/Title';

const { Paragraph, Text } = Typography;

export default function Policies() {
  return (
    <SectionContainer anchorName="policies" style={{ backgroundColor: '#fafafa', padding: '60px 20px' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Chính sách bán hàng
      </Title>

      <Paragraph style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 2rem', fontSize: '16px' }}>
        Dưới đây là những chính sách bán hàng hấp dẫn trong đợt mở bán đầu tiên của <strong>Vinhomes Green City</strong>,
        mang đến cơ hội đầu tư và an cư lý tưởng cho khách hàng.
      </Paragraph>

      <Row gutter={[32, 32]} justify="center" style={{ maxWidth: 1000, margin: '0 auto' }}>
        <Col xs={24} md={12}>
          <div>
            <h3><DollarCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} /> Ưu đãi thanh toán sớm</h3>
            <Paragraph>
              <Text strong>Chiết khấu lên đến 10%</Text> cho khách hàng thanh toán 95% giá trị sản phẩm ngay từ đầu.
            </Paragraph>
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div>
            <h3><CheckCircleOutlined style={{ color: '#1890ff', marginRight: 8 }} /> Hỗ trợ vay vốn</h3>
            <Paragraph>
              Ngân hàng hỗ trợ <Text strong>vay tới 70%</Text> giá trị căn hộ, <Text strong>lãi suất ưu đãi trong 24 tháng đầu</Text>.
            </Paragraph>
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div>
            <h3><GiftOutlined style={{ color: '#faad14', marginRight: 8 }} /> Miễn phí dịch vụ</h3>
            <Paragraph>
              <Text strong>Miễn phí 5 năm phí quản lý</Text> kể từ ngày bàn giao căn hộ.
            </Paragraph>
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div>
            <h3><StarOutlined style={{ color: '#eb2f96', marginRight: 8 }} /> Ưu đãi mở bán đặc biệt</h3>
            <ul style={{ paddingLeft: '1.2em' }}>
              <li><Text strong>Chiết khấu 1–20%</Text> trong đợt mở bán đầu tiên</li>
              <li>Tặng <Text strong>gói thiết kế sân vườn trị giá 450 triệu</Text></li>
              <li>Tặng <Text strong>voucher kim cương 150 triệu</Text></li>
              <li><Text strong>Booking sớm (27/5–10/6/2025)</Text>: nhận quà tặng & ưu đãi</li>
            </ul>
          </div>
        </Col>
      </Row>

      <Divider style={{ marginTop: '40px' }} />

      <Paragraph style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto', fontSize: '15px' }}>
        <Text type="secondary">
          Lưu ý: Các chính sách trên có thể thay đổi tùy theo thời điểm và từng loại sản phẩm cụ thể. Vui lòng liên hệ chuyên viên tư vấn để được cập nhật mới nhất.
        </Text>
      </Paragraph>
    </SectionContainer>
  );
}