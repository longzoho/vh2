import './VideoOverview.css';
import { Carousel, Row, Col } from 'antd';
import Title from './custom/Title';
import SectionContainer from './SectionContainer';
const MediaOverview = () => {
    return (
        <SectionContainer anchorName="video-overview">
                <Row gutter={[16, 16]} className="video-overview">
                    <Col span={24}><Title handWriting className="video-title">Video phối cảnh</Title></Col>
                    <Col span={24}><Title level={2} strong className="video-project-title" gradient>DỰ ÁN VINHOMES GREEN CITY</Title></Col>
                    <Col span={24}><div className="video-wrapper">
                        <iframe title="Vinhomes Green City | Đại đô thị All in One đầu tiên tại trung tâm mới Tây Bắc TP HCM" src="https://www.youtube.com/embed/OM3SvLc2f9Y?feature=oembed" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen name="fitvid0"></iframe>
                    </div></Col>
                    <Col span={24}>
                        <Carousel slidesToShow={3} arrows={false} dots={false} responsive={[{ breakpoint: 768, settings: { slidesToShow: 1, arrows: true, dots: false } }]}>
                            <img className="carousel-image" src="overview/img-1.jpg" alt='Vinhomes Green City' />
                            <img className="carousel-image" src="overview/img-2.jpg" alt='Vinhomes Green City' />
                            <img className="carousel-image" src="overview/img-3.jpg" alt='Vinhomes Green City' />
                        </Carousel>
                    </Col>


                </Row>
        </SectionContainer>
    );
};

export default MediaOverview;
