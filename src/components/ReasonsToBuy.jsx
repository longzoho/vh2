import React from 'react';
import { Row, Col, Card } from 'antd';
import SectionContainer from './SectionContainer';
import Title from './custom/Title';

const ReasonsToBuy = () => {
  return (
    <SectionContainer anchorName="reasons-to-buy">
      <Row gutter={[16, 16]}>
        <Col span={24} style={{ textAlign: 'center' }}>
          <Title level={2} handWriting>Lý do nên mua</Title>
          <Title level={2} strong gradient>VINHOMES GREEN CITY</Title>
        </Col>
        <Col span={24} style={{ textAlign: 'center' }}>
          <Row justify="center" gutter={[16, 16]} style={{ marginBottom: 40 }}>
            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
              <Card style={{ backgroundColor: '#fff', height: '100%' }}>
                <img src="reasons-to-buy/location.svg" alt="Vị trí thuận lợi, dễ dàng kết nối" style={{ width: '60px', height: '60px', color: '#FF6F61' }} />
                <Title level={3} style={{ color: '#FF6F61' }}> Vị trí thuận lợi, dễ dàng kết nối</Title>
                <p>Vinhomes Green City nằm ở vị trí trung tâm của huyện Đức Hòa, nơi có mạng lưới giao thông hoàn chỉnh dễ di chuyển đến các địa phương và khu vực khác. Đặc biệt, dự án gần với TP. HCM – trở thành lựa chọn lý tưởng để người dân Sài Thành chọn "an cư" dù "lập nghiệp" ở Sài Gòn.</p>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
              <Card style={{ backgroundColor: '#fff', height: '100%' }}>
                <img src="reasons-to-buy/home.svg" alt="Không gian sống TRỌN VẸN" style={{ width: '60px', height: '60px', color: '#FF6F61' }} />
                <Title level={3} style={{ color: '#FF6F61' }}>Không gian sống TRỌN VẸN</Title>
                <p>Mô hình "ALL IN ONE" được chủ đầu tư áp dụng triệt để tại Vinhomes Green City Tây Bắc Hồ Chí Minh. Nơi đây có đầy đủ mọi tiện ích phục vụ cho nhu cầu sống của con người, từ cơ bản cho đến cao cấp. Khi mọi thứ diễn ra trong một vài bước chân, không chỉ tiết kiệm thời gian cho cư dân mà còn nâng tầm chất lượng cuộc sống một cách ngoạn mục.</p>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
              <Card style={{ backgroundColor: '#fff', height: '100%' }}>
                <img src="reasons-to-buy/apartment.svg" alt="Đa dạng nhà ở để lựa chọn" style={{ width: '60px', height: '60px', color: '#FF6F61' }} />
                <Title level={3} style={{ color: '#FF6F61' }}>Đa dạng nhà ở để lựa chọn</Title>
                <p>Vinhomes Green City đem đến cho khách hàng nhiều lựa chọn về loại hình sản phẩm: biệt thự đơn lập, biệt thự song lập, nhà phố liền kề, shophouse, căn hộ chung cư, nhà ở xã hội, nhà tái định cư,... Từ nhu cầu sống đơn giản, giá rẻ đến không gian sống sang trọng, đẳng cấp Vinhomes Green City đều đáp ứng đầy đủ.</p>
              </Card>
            </Col>

          </Row>
          <Row gutter={[16, 16]} justify="center">
            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
              <Card style={{ backgroundColor: '#fff', height: '100%' }}>
                <img src="reasons-to-buy/law.svg" alt="Pháp lý vững vàng, chủ đầu tư uy tín" style={{ width: '60px', height: '60px', color: '#FF6F61' }} />
                <Title level={3} style={{ color: '#FF6F61' }}>Pháp lý vững vàng, chủ đầu tư uy tín</Title>
                <p>Vinhomes Green City đã được hoàn thiện về mặt hồ sơ pháp lý, đủ điều kiện để khởi công xây dựng và mở bán theo quy định. Công thêm sự uy tín của chủ đầu tư là Công ty CP Phát triển Thành Phố Xanh (thuộc Vinhomes) đem đến an tâm tuyệt đối cho khách hàng khi quyết định "xuống tiền" mua sản phẩm dự án.</p>
              </Card></Col>
            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
              <Card style={{ backgroundColor: '#fff', height: '100%' }}>
                <img src="reasons-to-buy/rise.svg" alt="Tiềm năng tăng giá cực lớn" style={{ width: '60px', height: '60px', color: '#FF6F61' }} />
                <Title level={3} style={{ color: '#FF6F61' }}>Tiềm năng tăng giá cực lớn</Title>
                <p>Từ năm 2019, Đức Hòa đã được xác định là "miếng bánh ngon", mảnh đất hứa vô cùng hấp dẫn đối với giới đầu tư. Và Vinhomes Green City, giá trị của dự án đã được cộng dồn nhờ vào điểm đất đắc địa, hưởng lợi từ sự phát triển của hạ tầng, "ăn theo" sự phát triển của các KCN và cụm công nghiệp tại đây.</p>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row >
    </SectionContainer >
  );
};

export default ReasonsToBuy;
