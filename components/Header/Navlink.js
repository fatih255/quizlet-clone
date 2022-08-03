import React from 'react';
import Link from 'next/link';
import { cx } from './constants';

const Navlink = ({ items }) => {

    return (
        <div className={cx('navlink-container')}>
            {
                items?.map((item, index) => {
                    if (React.isValidElement(item)) {
                        return <React.Fragment key={index} children={<div className={cx(item.design)} >{item}</div>} />
                    } else {
                        return <Link key={'link-' + index} href={item.href}>
                            <a className={cx('navlink', item.design)}>
                                <span>{item.text}</span>
                            </a>
                        </Link>
                    }
                    //<Link key={index} href={href}><a><span>{text}</span></a></Link> { href, text }
                    //jsxElements?.map((JsxElement, index) => <React.Fragment key={index} children={JsxElement} />)
                })}
        </div>

    );
}

export default Navlink;
