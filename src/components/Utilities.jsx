import React from 'react';
import { Card, Col, Row, Typography } from 'antd';
import UtilityItem from './UtilityItem';
import Title from './custom/Title';
import SectionContainer from './SectionContainer';
const { Paragraph } = Typography;

const utilities = [
  {
    title: 'Sở hữu "bộ sưu tập" hệ tiện ích All-in-one đẳng cấp',
    description: 'Mật độ xây dựng của dự án chỉ chiếm 25%, con số này cho thấy Vinhomes Green City chú trọng đến các hạng mục tiện ích và hệ thống giao thông nội khu. Điều này hoàn toàn phù hợp so với định hướng của dự án – đó là khu đô thị tích hợp "TẤT CẢ TRONG MỘT", nơi cư dân được tận hưởng cuộc sống đủ đầy, trọn vẹn và tiện nghi bậc nhất.',
    image: 'utilities/Vinhomes-Green-City.Anh-PC_08.Da-Share-24.05.2025-2048x1534.webp',
  },
  {
    title: 'Khu trung tâm thương mại Vincom Mega Mall',
    description: 'Nằm ở phía Bắc dự án, bên cạnh khu nhà ở cao tầng. Đây là đại tiện ích nổi bật nhất tại Vinhomes Green City Long An nói riêng và ở các dự án khu đô thị mang thương hiệu Vinhomes nói chung. Nơi đây có quy mô lớn, điểm đặt của các thương hiệu nổi tiếng, điểm đến vui chơi – giải trí bậc nhất.',
    image: 'utilities/Vinhomes-Urban-Lake-Long-An-tienich2.webp',
  },
  {
    title: 'Khu Hồ trung tâm THE GREAT LAKE',
    description: 'Được ví là "điều hòa" của toàn khu đô thị, nơi cung cấp nguồn nước trong sạch và nguồn không khí trong lành. Sự có mặt của hồ trung tâm đem đến cho dự án cảnh quan hấp dẫn, đồng thời trở thành điểm vui chơi, dạo bộ cho công dân. Đồng thời, nó cũng là tầm nhìn đắt giá cho những dãy nhà phố biệt thự khi nhìn từ trên cao xuống.',
    image: 'utilities/DO-THI-ALL-IN-ONE.webp',
  },
  {
    title: 'Tiện ích khu trung tâm ngoài trời',
    description: 'Nơi đây quy tụ hàng loạt các tiện ích đẳng cấp phục vụ cho nhu cầu đa dạng của cư dân. Ở đây có: bể bơi hiện đại, sân chơi liên hoàn cho trẻ em, khu tập gym đẳng cấp, khu BBQ thoáng đãng, khu thiền và yoga cực yên tĩnh và khu công viên thể thao đa năng.',
    image: 'utilities/z6623838594217_c39cd9be44bd7b6e44f872fb10a59b9e.webp',
  },
  {
    title: 'Khu cây xanh, cảnh quan',
    description: 'Chủ đầu tư dành nhiều diện tích để bố trí các khu cây xanh tạo cảnh quan đẹp mắt cho khu đô thị. Các tiểu khu này được bố trí khắp nơi để cư dân ở bất cứ khu nhà ở nào cũng có thể tiếp cận, sử dụng. Ở các khu cây xanh, ngoài các loại cây xanh bóng mát, các loại hoa đua sắc thì còn được bố trí ghế ngồi, đường dạo bộ, chỗ tập luyện, chỗ vui chơi, chỗ bán hàng đồ ăn/thức uống,… để trở thành điểm vui chơi – giải trí cho cư dân.',
    image: 'utilities/Vinhomes-Green-City.Anh-PC_05.Da-Share-24.05.2025-2048x1152.webp',
  },
];

export default function Utilities() {
  return (
    <SectionContainer anchorName="tienich">
      <Row gutter={[16, 16]} justify="center">
        <Col span={24} style={{ textAlign: 'center' }}>
          <Title level={2} handWriting>Tiện ích</Title>
        </Col>
        <Col span={24} style={{ textAlign: 'center' }}>
          <Title level={2} strong gradient>VINHOMES GREEN CITY</Title>
        </Col>
        {utilities.map((item, index) => (
          <Col span={24} key={index}>
            <UtilityItem title={item.title} description={item.description} image={item.image} left={index % 2 === 0} />
          </Col>
        ))}
      </Row>
    </SectionContainer>
  );
}
