import React from 'react';
import { Typography, Row, Col } from 'antd';
import SectionContainer from './SectionContainer';

const { Title, Paragraph } = Typography;

export default function Introduction() {
  return (
    <SectionContainer anchorName="introduction">
      <Row justify="center" align="middle" gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Title level={2} style={{ color: '#4CAF50' }}>VINHOMES GREEN CITY</Title>
          <Paragraph>
            <strong>Vinhomes Green City</strong> là dự án <strong>khu đô thị thông minh</strong> tích hợp không gian sống xanh và những tiện ích hiện đại. Tất cả những gì con người đang tìm kiếm đều hiện hữu tại đây, trong một vài bước chân: từ <strong>không gian riêng tư</strong> cho đến các tiện ích nội khu <strong>nâng tầm chất lượng sống</strong> của con người.
          </Paragraph>
          <Paragraph>
            Trên <strong>tổng diện tích 197.22 ha</strong>, chủ đầu tư đem đến thị trường <strong>05 loại hình nhà ở</strong> chính, gồm: biệt thự (đơn lập và song lập), nhà phố (thương mại và liên kế), khu tái định cư, chung cư cao tầng và nhà ở xã hội. Sự đa dạng về loại hình nhà ở được cho là để đáp ứng "khẩu vị" của nhiều đối tượng khách hàng khác nhau, sao cho phù hợp với sở thích và khả năng tài chính của mỗi người.
          </Paragraph>
          <Paragraph>
            Trên hồ sơ pháp lý, Vinhomes Green City có tên gọi là <strong>Khu đô thị Hậu Nghĩa – Đức Hòa</strong>. Dự án được chấp thuận đầu tư ngày 20/10/2023 tại Quyết định số 9763/QĐ-UBND do UBND tỉnh Long An chấp thuận, dự án sẽ hoàn thành trong vòng 6 năm và <strong>năm 2029 sẽ đưa vào khai thác vận hành</strong>. Đây được xem là thời điểm tốt nhất để mua sản phẩm khi số lượng còn nhiều, lựa chọn đa dạng và giá bán đang ở mức sơ khai.
          </Paragraph>
        </Col>
        <Col xs={24} md={12}>
          <img src="introduction/image.jpg" alt="Vinhomes Green City" style={{ width: '100%', borderRadius: '8px' }} />
        </Col>
      </Row>
    </SectionContainer>
  );
}
