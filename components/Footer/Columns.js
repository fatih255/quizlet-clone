import Link from 'next/link';
import React from 'react';
import cx from './cx';

const Columns = ({ items }) => {

    const FooterHead = ({ text }) => <h5>{text}</h5>;
    const FooterLink = ({ text, href, icon = undefined }) => <Link href={href} ><a>{text} {icon && icon}</a></Link>;

    return (<>
        {items.map(({ links, head, Component }, index) => <div className={cx('column')} key={index}>
            <FooterHead text={head} />
            {links?.map(({ text, href, icon }, index) => <FooterLink key={index + 'footer-link'} text={text} href={href} icon={icon} />)}
            {Component && Component}
        </div>)}
    </>
    )

}

export default Columns;
