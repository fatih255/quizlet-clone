import React from 'react';
import Link from 'next/link';
import { useHeaderContext } from './context';

const Navlink = ({ items }) => {

    const { cx } = useHeaderContext();
    return (
        <React.Fragment>
            {
                items?.map((item, index) => {
                    if (React.isValidElement(item)) {
                        return <React.Fragment key={index} children={<div className={cx(item.design)} >{item}</div>} />
                    } else {
                        return <Link key={index} href={item.href}>
                            <a className={cx('navlink', item.design)}>
                                <span>{item.text}</span>
                            </a>
                        </Link>
                    }
                    //<Link key={index} href={href}><a><span>{text}</span></a></Link> { href, text }
                    //jsxElements?.map((JsxElement, index) => <React.Fragment key={index} children={JsxElement} />)
                })}
        </React.Fragment>

    );
}

export default Navlink;
