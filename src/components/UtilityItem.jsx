import { Typography } from "antd";
import './UtilityItem.css';
import Title from "./custom/Title";
const { Paragraph } = Typography;


export default function UtilityItem({ title, description, image, left = false }) {
    return (
        <div className={`utility-item ${left ? 'left' : 'right'}`}>
            <img src={image} alt={title} />
            <div className="utility-item-content">
                <Title level={4} className="utility-item-title" gradient>{title}</Title>
                <Paragraph className="utility-item-description">{description}</Paragraph>
            </div>
        </div>
    );
}