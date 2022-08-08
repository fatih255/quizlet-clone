import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import Link from 'next/link';

const Button = ({ text, design, Icon, textDesign = '', link = undefined, ...props }) => {


    const cx = classNames.bind(styles)


    return (
        <button className={cx('icon-right', design)} {...props}>
            {link ?
                <Link href={link} >
                    <a>
                        {Array.isArray(Icon) ? Icon.map((icon, index) => <React.Fragment key={index} children={icon} />) : Icon}
                        <span className={cx(textDesign)}>{text}</span>
                    </a>
                </Link>
                :
                <>
                    <span className={cx(textDesign)}>{text}</span>
                    {Array.isArray(Icon) ? Icon.map((icon, index) => <React.Fragment key={index} children={icon} />) : Icon}
                </>
            }


        </button>
    );
}

export default Button;
