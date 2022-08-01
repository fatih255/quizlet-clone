import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const Button = ({ text, design, Icon, hideTextOnMobile = false, ...props }) => {

    const cx = classNames.bind(styles)
    return (
        <button className={cx(design)} {...props}>
            <span className={cx({ hide: hideTextOnMobile })}>{text}</span>
            {Array.isArray(Icon) ? Icon.map((icon, index) => <React.Fragment key={index} children={icon} />) : Icon}
        </button>
    );
}

export default Button;
