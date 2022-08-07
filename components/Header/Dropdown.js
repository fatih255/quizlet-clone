import React, { useState } from 'react';
import { TbChevronDown, TbChevronRight } from 'react-icons/tb'
import themeVariables from 'styles/variables.module.scss';
import Link from 'next/link';
import { cx } from './constants';
import { observer } from 'mobx-react-lite';
import { useRootStore } from 'providers/RootStoreProvider';

const Dropdown = ({ dropdownItems, design, alwaysOpenOnMobile }) => {


    const { isMobileMenuActive } = useRootStore().UIStore;
    // fix more render issue*****
    const [selectedItemIndex, setselectedItemIndex] = useState(selectedItemIndex ? null : 0);




    const Item = ({ index, icon, text, links, href }) => {

        const onMouseEnterHandler = (itemIndex) => {
            console.log('asd')
            if (links && links.length > 0) {
                setselectedItemIndex(itemIndex);

            }


        }

        return (
            !isMobileMenuActive ? <div
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
            </div> : <div onClick={() => onMouseEnterHandler(index)} className={cx({ active: selectedItemIndex === index && !!links })}>
                {links ? <>
                    <div className={cx('mobile-dropdown-iconr-link')}>
                        <div className={cx('dropdown-iconandtxt')}>
                            {icon && icon}<span>{text}</span>
                        </div>
                        <TbChevronDown className={cx('mobile-dropdown-downarrow')} width={15} color={themeVariables.grayColor400} />
                    </div>
                </>
                    :
                    <Link href={href}><a className={cx('m-dropdown-link')}>{text}</a></Link>}
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
        !isMobileMenuActive ? <div className={cx('dropdown', design)}>
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

        </div> : <div className={cx('dropdown-mobile', design)}>

            {dropdownItems.map((item, index) => <div>
                <Item key={index} index={index} {...item} />
                {dropdownItems[index]?.links &&
                    <div className={cx('item-pages', { hide: selectedItemIndex !== index })}>
                        {
                            dropdownItems[selectedItemIndex]?.links.map((itemlink, index) => <ItemLink key={index}  {...itemlink} />)
                        }
                    </div>
                }
            </div>)}




        </div>
    );
}

export default observer(Dropdown);
