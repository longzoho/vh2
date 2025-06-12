import React from 'react';
import { Typography, List, Row, Col, Card } from 'antd';
import { EnvironmentOutlined, CompassOutlined, CarOutlined } from '@ant-design/icons';
import SectionContainer from './SectionContainer';
import Title from './custom/Title';

const { Paragraph, Text } = Typography;

const LocationInfo = () => {
  return (
    <SectionContainer
      anchorName="location-info"
      style={{ backgroundColor: '#f9f9f9', padding: '60px 20px' }}
    >
      <Row justify="center" gutter={[16, 16]}>
        <Col span={24} style={{ textAlign: 'center' }}>
          <Title level={2} handwriting style={{ color: '#3CB371' }}>
            <EnvironmentOutlined style={{ marginRight: 8 }} />
            Vị trí dự án
          </Title>
          <Title level={2} strong style={{ color: '#FF7F50' }}>
            VINHOMES GREEN CITY
          </Title>
        </Col>
      </Row>

      <Row justify="center">
        <Col span={20}>
          <Card bordered={false} style={{ marginBottom: 24 }}>
            <Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
              Dự án toạ lạc tại <Text strong>thị trấn Hậu Nghĩa</Text>, <Text strong>xã Đức Lập Thượng</Text> và <Text strong>xã Tân Mỹ</Text> thuộc huyện <Text strong>Đức Hòa, tỉnh Long An</Text>.
            </Paragraph>
          </Card>

          <Card title={<span><CompassOutlined /> Tứ phía dự án</span>} style={{ marginBottom: 24 }}>
            <List
              dataSource={[
                'Phía Bắc: Giáp khu dân cư hiện hữu ở đường Bàu Công.',
                'Phía Nam: Giáp khu dân cư hiện hữu ở đường Nguyễn Thị Hạnh.',
                'Phía Đông: Giáp khu dân cư thuộc xã Đức Lập Thượng.',
                'Phía Tây: Giáp thị trấn Hậu Nghĩa và trục đường Quốc lộ N2.'
              ]}
              renderItem={item => <List.Item style={{ fontSize: '16px' }}>{item}</List.Item>}
            />
          </Card>

          <Card title={<span><CarOutlined /> Kết nối giao thông</span>} style={{ marginBottom: 24 }}>
            <Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
              Vị trí lý tưởng để <Text strong>giãn dân từ TP.HCM</Text> trong bối cảnh đất chật, giá cao. Dễ dàng tiếp cận qua các tuyến:
              <Text italic> ĐT823, ĐT824, ĐT825, cao tốc 02, Vành đai 4, Quốc lộ 1A, Quốc lộ 22, cao tốc Trung Lương – TP.HCM</Text>.
              Thời gian di chuyển chỉ khoảng <Text strong>15–20 phút</Text>.
            </Paragraph>
          </Card>

          <Card title="Tiềm năng phát triển" bordered={false}>
            <List
              dataSource={[
                'Dự án trải rộng 197 ha, tọa lạc ngay trên Quốc lộ N2 – tuyến huyết mạch liên kết TP.HCM với Tây Nam Bộ và Tây Bắc TP.HCM',
                'Tiếp cận nhiều tuyến vành đai (Vành đai 3, 4), cao tốc (TP.HCM – Trung Lương, HCM – Mộc Bài, Bắc–Nam phía Tây), tuyến Metro số 2 Bến Thành – Tham Lương… giúp kết nối linh hoạt đến trung tâm và vùng lân cận',
                'Là “cửa ngõ” giữa TP.HCM – Long An – Tây Nam Bộ và tiếp giáp chuỗi KCN lớn như Đức Hòa I, II, III, …',
              ]}
              renderItem={item => <List.Item style={{ fontSize: '16px' }}>{item}</List.Item>}
            />
          </Card>
        </Col>
      </Row>
    </SectionContainer>
  );
};

export default LocationInfo;
