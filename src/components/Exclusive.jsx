import React from 'react';
import { Typography, Image, Row, Col, Divider } from 'antd';
import SectionContainer from './SectionContainer';
import Title from './custom/Title';

const { Paragraph } = Typography;

const Exclusive = () => {
  return (
    <SectionContainer anchorName="daily" style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
      <Row justify="center">
        <Col span={24} style={{ textAlign: 'center' }}>
          <Title level={1} style={{ color: '#ff671c', marginBottom: '20px' }}>Liên Minh VAT-Đại Lý Phân Phối Chiến Lược Vinhome của tập đoàn Vingroup</Title>
        </Col>
      </Row>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
        <div style={{ flex: '0 0 auto', minWidth: '500px' }}>
          <Image
            src="investorInfo/exclusive.jpg"
            alt="Logo Việt Phúc Holdings"
            preview={false}
            style={{ width: '100%', maxWidth: '500px', objectFit: 'contain', borderRadius: '8px' }}
          />
        </div>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <Divider style={{ margin: '20px 0' }} />
          <Paragraph style={{ fontSize: '16px', lineHeight: '1.6', color: '#34495e' }}>
            Công ty Cổ phần Đầu tư Việt Phúc Holdings được thành lập vào ngày 22/11/2024, do ông Hoàng Thanh Liêm làm người đại diện pháp luật. Trụ sở chính đặt tại số 65, Đường số 12, KDC CityLand Park Hills, Phường 10, Quận Gò Vấp, TP. Hồ Chí Minh.
          </Paragraph>
          <Paragraph style={{ fontSize: '16px', lineHeight: '1.6', color: '#34495e' }}>
            Việt Phúc Holdings là doanh nghiệp trẻ, năng động, hoạt động đa ngành nghề, từ bất động sản, xây dựng đến giáo dục và du học. Công ty hướng đến mục tiêu cung cấp các sản phẩm và dịch vụ chất lượng cao, lấy uy tín làm kim chỉ nam cho mọi hoạt động.
          </Paragraph>
          <Paragraph style={{ fontSize: '16px', lineHeight: '1.6', color: '#34495e' }}>
            Trong lĩnh vực bất động sản, Việt Phúc Holdings là đại lý phân phối F1 (cấp 1) chính thức của nhiều dự án lớn, trong đó có Vinhomes Green City tại Long An. Công ty đảm nhận vai trò kết nối trực tiếp giữa chủ đầu tư và khách hàng, đảm bảo thông tin minh bạch, quyền lợi tối đa và dịch vụ tư vấn chuyên nghiệp.
          </Paragraph>
          <Paragraph style={{ fontSize: '16px', lineHeight: '1.6', color: '#34495e' }}>
            Với đội ngũ lãnh đạo trẻ, giàu kinh nghiệm cùng định hướng phát triển bền vững, Việt Phúc Holdings đang từng bước khẳng định vị thế của mình trên thị trường và là đối tác tin cậy cho khách hàng cũng như nhà đầu tư.
          </Paragraph>
          <Paragraph style={{ fontSize: '16px', lineHeight: '1.6', color: '#34495e' }}>
            Với phương châm "Phát triển bền vững – Đồng hành dài lâu", Việt Phúc Holdings không ngừng nâng cao chất lượng dịch vụ và tiêu chuẩn quản trị chuyên nghiệp. Công ty cam kết minh bạch trong mọi hoạt động, đề cao giá trị cộng đồng và luôn đặt lợi ích của khách hàng, đối tác lên hàng đầu.
          </Paragraph>
          <Paragraph style={{ fontSize: '16px', lineHeight: '1.6', color: '#34495e' }}>
            Thông qua việc áp dụng công nghệ hiện đại, đội ngũ nhân sự tâm huyết và chiến lược phát triển dài hạn, Việt Phúc Holdings đang tạo dựng vị thế vững chắc trong ngành bất động sản và đầu tư tại Việt Nam.
          </Paragraph>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Exclusive; 