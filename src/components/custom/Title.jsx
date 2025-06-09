import { useState, useEffect } from 'react';
import { Typography } from 'antd';
import PropTypes from 'prop-types';
import './Title.css';

const { Title: AntTitle } = Typography;

export default function Title(props) {
    const { children, handWriting, gradient, className, strong, style, imgBg, ...rest } = props;
    const [combinedClassName, setCombinedClassName] = useState('');
    const [combinedStyle, setCombinedStyle] = useState({});

    useEffect(() => {
        let cssNames = className ? className.split(' ') : [];
        if (handWriting) {
            cssNames = [...cssNames, 'handwriting'];
        }
        if (gradient) {
            cssNames = [...cssNames, 'gradient'];
        }
        if (strong) {
            cssNames = [...cssNames, 'strong'];
        }
        if (cssNames.length > 0) {
            setCombinedClassName(cssNames.join(' '));
        }

    }, [handWriting, gradient, className, strong]);

    useEffect(() => {
        if (imgBg) {
            setCombinedStyle({ ...style, backgroundImage: `url(${imgBg})`, color: 'rgba(0,0,0,0)', backgroundClip: 'text' });
        } else {
            setCombinedStyle({ ...style });
        }
    }, [imgBg, style]);

    return <AntTitle {...rest} className={combinedClassName} style={combinedStyle}>{children}</AntTitle>;
}

Title.propTypes = {
    children: PropTypes.node.isRequired,
    handWriting: PropTypes.bool,
    className: PropTypes.string,
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
    gradient: PropTypes.bool,
    strong: PropTypes.bool,
    imgBg: PropTypes.string,
};