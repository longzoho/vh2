import React from 'react';
import { Typography, Table } from 'antd';

const { Title, Paragraph } = Typography;

const pricingData = [
  {
    key: '1',
    type: 'Căn hộ 1 phòng ngủ',
    area: '35 - 45 m²',
    price: '1.2 - 1.5 tỷ',
  },
  {
    key: '2',
    type: 'Căn hộ 2 phòng ngủ',
    area: '55 - 65 m²',
    price: '1.9 - 2.3 tỷ',
  },
  {
    key: '3',
    type: 'Nhà phố thương mại',
    area: '75 - 100 m²',
    price: '4.5 - 6.2 tỷ',
  },
];

const columns = [
  {
    title: 'Loại sản phẩm',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Diện tích',
    dataIndex: 'area',
    key: 'area',
  },
  {
    title: 'Giá bán (VNĐ)',
    dataIndex: 'price',
    key: 'price',
  },
];

export default function Pricing() {
  return (
    <div style={{ padding: '3rem 2rem' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '2rem' }}>Bảng giá dự kiến</Title>
      <Paragraph style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 2rem' }}>
        Dưới đây là bảng giá tham khảo cho các loại hình sản phẩm tại Vinhomes Green City. Giá có thể thay đổi tùy theo vị trí và thời điểm mở bán.
      </Paragraph>
      <Table
        dataSource={pricingData}
        columns={columns}
        pagination={false}
        bordered
      />
    </div>
  );
}
