import React from 'react';
import { Row, Col, Image } from 'antd';
import SectionContainer from './SectionContainer';
import Title from './custom/Title';
export default function MasterPlan() {
  return (
    <SectionContainer anchorName="matbang">
      <Row gutter={[24, 24]} align="middle" justify="center">
        <Col xs={24} style={{ textAlign: 'center' }}>
          <Title level={2} gradient>MẶT BẰNG DỰ ÁN VINHOMES GREEN CITY</Title>
        </Col>
        <Col xs={24}>
          <Image
            width="100%"
            src="masterplan/image.png"
            alt="Mặt bằng tổng thể"
            preview={false}
          />
        </Col>
      </Row>
    </SectionContainer>
  );
}
