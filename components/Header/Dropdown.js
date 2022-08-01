import React, { useState } from 'react';
import { TbChevronRight } from 'react-icons/tb'
import themeVariables from 'styles/variables.module.scss';
import Link from 'next/link';
import { useHeaderContext } from './context';

const Dropdown = ({ dropdownItems }) => {
// fix more render issue*****
    const [selectedItemIndex, setselectedItemIndexIndex] = useState(0);
    const { cx } = useHeaderContext();

    const Item = ({ index, icon, text, links, href }) => {

        const onMouseEnterHandler = (itemIndex) => {
            setselectedItemIndexIndex(itemIndex)
        }

        return (
            <div
                onMouseEnter={() => onMouseEnterHandler(index)}
                className={cx('item', { active: selectedItemIndex === index && !!links }, { link: !links })} >
                <div className={cx('item-left')}>
                    {links ?
                        <>
                            {icon && icon}<span>{text}</span>
                        </> :
                        <>
                            <Link href={href}><a>{icon && icon}<span>{text}</span></a></Link>
                        </>}
                </div>
                {links && <TbChevronRight color={themeVariables.grayColor400} />}
            </div>
        )
    }

    const ItemLink = ({ href, text, addClass }) => (
        <Link href={href}>
            <a className={cx(addClass)} >
                {text}
            </a>
        </Link>
    )

    return (
        <div className={cx('dropdown')}>
            <div>
                {dropdownItems.map((item, index) => <Item key={index} index={index} {...item} />)}
            </div>
            {dropdownItems[selectedItemIndex]?.links &&
                <div className={cx('item-pages')}>
                    {
                        dropdownItems[selectedItemIndex]?.links.map((itemlink, index) => <ItemLink key={index}  {...itemlink} />)
                    }
                </div>
            }

        </div>
    );
}

export default Dropdown;
