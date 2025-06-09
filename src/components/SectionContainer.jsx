import React, { useRef } from 'react';
import { Layout } from 'antd';
import './SectionContainer.css';

const { Content } = Layout;

const SectionContainer = ({ children, backgroundColor, backgroundImage, anchorName }) => {
  const rowRef = useRef(null);

  const cssStyle = {}
  if (backgroundImage) {
    cssStyle.backgroundImage = `url(${backgroundImage})`;
    cssStyle.backgroundSize = '100%';
    cssStyle.backgroundPosition = 'top';
    cssStyle.backgroundRepeat = 'no-repeat';
  }
  if (backgroundColor) {
    cssStyle.backgroundColor = backgroundColor;
  }
  const _props = anchorName ? { id: anchorName } : {};
  return (
    <section ref={rowRef} className="section-container" style={cssStyle} tabIndex="-1" {..._props} >
      <Content className='section-content'>
        {children}
      </Content>
    </section>
  );
};

export default SectionContainer;
