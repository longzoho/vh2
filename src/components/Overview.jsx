import './VideoOverview.css';
import { Row, Col, Card } from 'antd';
import Title from './custom/Title';
import { EnvironmentOutlined, BuildOutlined, TeamOutlined, DollarOutlined, HomeOutlined } from '@ant-design/icons';
import SectionContainer from './SectionContainer';
import './Overview.css';
import React from 'react';


const Overview = () => {
    return (
        <>
            <SectionContainer anchorName="tongquan">
                <Row gutter={[24, 24]} align="middle" justify="center" style={{ marginBottom: 50 }}>
                    <Col span={24} style={{ textAlign: 'center' }}>
                        <Title level={1} strong imgBg={'overview/img-1.jpg'}>TỔNG QUAN</Title>
                        <Title level={1} gradient>VINHOMES GREEN CITY</Title>
                    </Col>
                    <Col span={4} style={{ textAlign: 'center' }}>
                        <EnvironmentOutlined style={{ fontSize: '32px', color: '#00a65a' }} />
                        <div><strong>200</strong> HA</div>
                        <div>Tổng diện tích đất toàn khu</div>
                    </Col>
                    <Col span={4} style={{ textAlign: 'center' }}>
                        <BuildOutlined style={{ fontSize: '32px', color: '#00a65a' }} />
                        <div><strong>25</strong> %</div>
                        <div>Mật độ xây dựng</div>
                    </Col>
                    <Col span={4} style={{ textAlign: 'center' }}>
                        <TeamOutlined style={{ fontSize: '32px', color: '#00a65a' }} />
                        <div><strong>40</strong> nghìn</div>
                        <div>Quy mô dân số dự kiến</div>
                    </Col>
                    <Col span={4} style={{ textAlign: 'center' }}>
                        <DollarOutlined style={{ fontSize: '32px', color: '#00a65a' }} />
                        <div><strong>28</strong> nghìn tỉ</div>
                        <div>Vốn đầu tư xây dựng</div>
                    </Col>
                    <Col span={4} style={{ textAlign: 'center' }}>
                        <HomeOutlined style={{ fontSize: '32px', color: '#00a65a' }} />
                        <div><strong>5,000</strong> căn</div>
                        <div>Nhà phố, shophouse, biệt thự, căn hộ</div>
                    </Col>
                </Row>
            </SectionContainer>
            <SectionContainer backgroundImage="overview/liveInVinhome.jpg">
                <Row gutter={[24, 24]} align="middle" justify="center">
                    <Col span={20}>
                        <Card style={{ background: 'rgba(255, 255, 255, 0.9)', margin: "50px 0" }}>
                            <table className="project-details-table">
                                <tbody>
                                    <tr>
                                        <td width={200}><strong>Tên gọi dự án:</strong></td>
                                        <td>Vinhomes Green City, Vinhomes Green City Long An, Vinhomes Green City Hậu Nghĩa, Vinhomes Long An,...</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Tên pháp lý:</strong></td>
                                        <td>Khu đô thị Mới Hậu Nghĩa – Đức Hòa</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Chủ đầu tư:</strong></td>
                                        <td>Công ty CP Phát triển Thành Phố Xanh (thuộc Công ty CP Vinhomes)</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Vị trí:</strong></td>
                                        <td>Thị trấn Hậu Nghĩa và các xã: Đức Lập Thượng, Tân Mỹ thuộc huyện Đức Hòa, tỉnh Long An.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Quy mô dự án:</strong></td>
                                        <td>197,22 ha</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Quy mô dân số:</strong></td>
                                        <td>40.000 người (dự kiến)</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Sản phẩm:</strong></td>
                                        <td>
                                            <ul>
                                                <li>Biệt thự (song lập, đơn lập): 517 căn, phong cách Tân cổ điển, chiều cao tối đa 5 tầng.</li>
                                                <li>Nhà phố (liền kề, thương mại): 4510 căn, chiều cao tối đa 5 tầng.</li>
                                                <li>Căn hộ: gồm các căn ở khu tái định cư, khu chung cư cao tầng và nhà ở xã hội.</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>Tiện ích:</strong></td>
                                        <td>Trung tâm thương mại Vincom Mega Mall, Hồ trung tâm The Great Lake, bể bơi, sân chơi liên hoàn trẻ em, khu tập gym, khu BBQ, khu thiền và yoga, khu công viên thể thao đa năng,...</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Pháp lý:</strong></td>
                                        <td>Đầy đủ và hoàn thiện theo quy định của pháp luật, đủ điều kiện mở bán trong năm 2025.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Card>
                    </Col>
                </Row>
            </SectionContainer>
        </>
    );
};

export default Overview;

