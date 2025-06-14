import { useState, useEffect } from 'react';
import { Typography } from 'antd';
import PropTypes from 'prop-types';
import './Title.css';

const { Title: AntTitle } = Typography;

const TitleProps = {
    children: PropTypes.node.isRequired,
    handWriting: PropTypes.bool,
    className: PropTypes.string,
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
    gradient: PropTypes.bool,
    strong: PropTypes.bool,
    imgBg: PropTypes.string,
    center: PropTypes.bool,
};

/**
 * 
 * @param {*} props : TitleProps
 * @returns 
 */
export default function Title(props) {
    const { children, handWriting, gradient, className, strong, style, imgBg, center, ...rest } = props;
    const [combinedClassName, setCombinedClassName] = useState('');
    const [combinedStyle, setCombinedStyle] = useState({});

    useEffect(() => {
        const cssNames = [
            className,
            handWriting && 'handwriting',
            gradient && 'gradient',
            strong && 'strong',
            center && 'center'
        ].filter(Boolean).join(' ');
        
        setCombinedClassName(cssNames);
        setCombinedStyle(imgBg ? 
            { ...style, backgroundImage: `url(${imgBg})`, color: 'rgba(0,0,0,0)', backgroundClip: 'text' } : 
            { ...style }
        );
    }, [handWriting, gradient, className, strong, center, imgBg, style]);

    return <AntTitle {...rest} className={combinedClassName} style={combinedStyle}>{children}</AntTitle>;
}

Title.propTypes = TitleProps;
