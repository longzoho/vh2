import { Carousel, Col, Row } from 'antd';
import styles from './SandTable.module.scss';
import SectionContainer from "./SectionContainer";
import Title from "./custom/Title";

export default function SandTable() {
  return (<SectionContainer className={styles.sandTableContainer}>
      <Title handWriting level={1} center>
        Sa Bàn
      </Title>
      <Row justify={'center'}>
        <Col xs={24} md={22} lg={20} xl={18}>
          <Carousel className={styles.sandTable} dots={true} effect="fade" slidesToShow={1} draggable autoplay>
            <div><img src="sand-table/image-1.jpg" alt="Sand Table 1"/></div>
            <div><img src="sand-table/image-2.jpg" alt="Sand Table 2"/></div>
            <div><img src="sand-table/image-3.jpg" alt="Sand Table 3"/></div>
            <div><img src="sand-table/image-4.jpg" alt="Sand Table 4"/></div>
            <div><img src="sand-table/image-5.jpg" alt="Sand Table 5"/></div>
            <div><img src="sand-table/image-6.jpg" alt="Sand Table 6"/></div>
            <div><img src="sand-table/image-7.jpg" alt="Sand Table 7"/></div>
          </Carousel>
        </Col>
      </Row>
    </SectionContainer>
  )
}
