import React from "react";
import { Typography, Row, Col } from "antd";
import styles from "./PriceTable.module.scss";
import SectionContainer from "./SectionContainer";
import Title from "./custom/Title";

const { Text } = Typography;

const dataSource = [
    {
        key: "1",
        type: "Căn hộ cao tầng",
        area: "50 – 110",
        price: "1,5 – 3,8 tỷ",
    },
    {
        key: "2",
        type: "Nhà phố liền kề",
        area: "60 – 120",
        price: "4,5 – 6,5 tỷ",
    },
    {
        key: "3",
        type: "Shophouse thương mại",
        area: "80 – 180",
        price: "6,5 – 9 tỷ",
    },
    {
        key: "4",
        type: "Biệt thự song lập",
        area: "120 – 200",
        price: "7 – 10,5 tỷ",
    },
    {
        key: "5",
        type: "Biệt thự đơn lập",
        area: "180 – 300",
        price: "9 – 13 tỷ",
    },
];

const columns = [
    {
        title: "SẢN PHẨM",
        dataIndex: "type",
        key: "type",
        align: "left",
    },
    {
        title: "DIỆN TÍCH (M²)",
        dataIndex: "area",
        key: "area",
        align: "left",
    },
    {
        title: "GIÁ THAM KHẢO (TỶ/CĂN)",
        dataIndex: "price",
        key: "price",
        align: "left",
    },
];

export default function PriceTable() {
    return (
        <SectionContainer backgroundImage="pricetable/vhbg.jpg" className={styles.priceTableContainer}>
            <Row
                justify="center"
                align="middle"
            >
                <Col span={16}>
                    <div className={styles.priceTableInner}>
                        <Title level={2} style={{ color: "#fff", textAlign: "center" }}>
                            GIÁ VINHOMES GREEN CITY
                        </Title>
                        <Title level={5} style={{ color: "#fff" }}>
                            Giá Vinhomes Green City đang dao động từ <b>1,5 tỷ đến 13 tỷ đồng/căn</b>, tùy vào từng dòng sản phẩm và diện tích cụ thể. So với mặt bằng các khu đô thị quanh TP.HCM, đây là mức giá hấp dẫn cho giai đoạn đầu.
                        </Title>
                        <Title level={5} style={{ color: "#ffe066" }}>
                            Bảng giá Vinhomes Green City tham khảo
                        </Title>
                        <table className={styles.priceTable}>
                            <thead>
                                <tr>
                                    <th>SẢN PHẨM</th>
                                    <th>DIỆN TÍCH (M²)</th>
                                    <th>GIÁ THAM KHẢO (TỶ/CĂN)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataSource.map((item) => (
                                    <tr key={item.key}>
                                        <td>{item.type}</td>
                                        <td>{item.area}</td>
                                        <td>{item.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <Text italic style={{ color: "#fff", fontSize: 14 }}>
                            Bảng giá trên là mức tham khảo. Giá thực tế có thể thay đổi tùy theo vị trí căn, hướng nhà, view hồ – công viên và thời điểm mở bán.
                        </Text>
                    </div>
                </Col>
            </Row>

        </SectionContainer>
    );
}