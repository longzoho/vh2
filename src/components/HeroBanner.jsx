import React from 'react';
import { Button } from 'antd';
import './HeroBanner.css';

import Title from './custom/Title';

export default function HeroBanner() {
  return (
    <div className="hero-banner">
      <div className="hero-overlay" />
      <img
        src="cover/img.jpg"
        alt="Hero Background"
        className="hero-image"
      />
      <div className="hero-content">
        <Title handWriting className="hero-subtitle">Dự án</Title>
        <Title className="hero-title">VINHOMES GREEN CITY</Title>
        <Title className="hero-location">Đức Hòa – Long An</Title>
        <Title level={2} className="hero-highlight">THÀNH PHỐ GIAO THƯƠNG</Title>
        <Title className="hero-tagline">Sinh thái thịnh vượng</Title>
        <Title level={5}>
          Đô thị All-in-one đầu tiên phía Tây Bắc TP. Hồ Chí Minh
        </Title>
        <Button type="primary" size="large">Đăng ký tư vấn</Button>
      </div>
    </div>
  );
}
