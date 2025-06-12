import React from 'react';
import { Typography, Image, Row, Col, Divider } from 'antd';
import SectionContainer from './SectionContainer';
import Title from './custom/Title';

const { Paragraph } = Typography;

const InvestorInfo = () => {
  return (
    <SectionContainer anchorName="chu-dau-tu" style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
      <Row justify="center">
        <Col span={24} style={{ textAlign: 'center' }}>
          <Title level={1} style={{ color: '#ff671c', marginBottom: '20px' }}>Chủ đầu tư CTCP PT Thành Phố Xanh</Title>
        </Col>
      </Row>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
        <div style={{ flex: '0 0 auto', minWidth: '500px' }}>
          <Image
            src="investorInfo/investor.png"
            alt="Logo Việt Phúc Holdings"
            preview={false}
            style={{ width: '500px', maxWidth: 'calc(100vw - 40px)', objectFit: 'contain', borderRadius: '8px' }}
          />
        </div>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <Divider style={{ margin: '20px 0' }} />
          <Paragraph style={{ fontSize: '16px', lineHeight: '1.6', color: '#34495e' }}>
            Công ty Cổ phần Phát triển Thành Phố Xanh được thành lập vào ngày 23/11/2007, do Nguyễn Thục Hiền làm đại diện pháp luật. Công ty có trụ sở tại 72 Lê Thánh Tôn, phường Bến Nghé, Quận 1, TP. HCM.
          </Paragraph>
          <Paragraph style={{ fontSize: '16px', lineHeight: '1.6', color: '#34495e' }}>
            Vào năm 2021, Công ty CP Phát triển Thành Phố Xanh trở thành công ty con của Công ty Cổ phần Vinhomes – doanh nghiệp có 4 cổ đông lớn, trong đó Vingroup sở hữu 24% vốn.
          </Paragraph>
          <Paragraph style={{ fontSize: '16px', lineHeight: '1.6', color: '#34495e' }}>
            Trải qua gần 20 năm thành lập và phát triển, Công ty CP Phát triển Thành Phố Xanh đã có bề dày kinh nghiệm và ghi dấu ấn bởi sự thành công của nhiều dự án khác nhau. Nổi bật nhất là Khu dân cư và công viên Phước Thiện (tên thương mại Vinhomes Grand Park) tại quận 9 (TP. HCM), quy mô 270 ha, đem đến thị trường 40.000 căn hộ cao tầng và 1.700 sản phẩm thấp tầng.
          </Paragraph>
          <Paragraph style={{ fontSize: '16px', lineHeight: '1.6', color: '#34495e' }}>
            Sự thành công của Vinhomes Grand Park là cơ sở để tin rằng Vinhomes Green City Tây Bắc Hồ Chí Minh được đầu tư bởi Công ty CP Phát triển Thành Phố Xanh sẽ mang đến Đức Hòa một dự án khang trang, mang đến cho khách hàng các sản phẩm nhà ở chất lượng và đem đến cho giới đầu tư "sân chơi" an toàn và đầy hứa hẹn.
          </Paragraph>
        </div>
      </div>
    </SectionContainer>
  );
};

export default InvestorInfo;
