import Button from './Button';
import React, { useEffect, useRef, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import classNames from 'classnames/bind';
import styles from './ButtonDropdown.module.scss'
import buttonStyles from './Button.module.scss'

const ButtonDropdown = ({
    text, design = 'btn-dropdown',
    dropdownElement,
    arrowSize = 22,
    hideArrowOnMobile = false,
    mobile = null }) => {

    const cx = classNames.bind(styles);
    const buttoncx = classNames.bind(buttonStyles);
    const [show, setShow] = useState(false);

    const dropdownRef = useRef(null);
    const isMouseOutofBox = useRef(false);
    const EffectRan = useRef(false);
    const showDropdownHandler = () => {
        setShow(!show)
    }

    useEffect(() => {
        if (!EffectRan.current) {
            dropdownRef.current.onmouseleave = () => isMouseOutofBox.current = true;
            dropdownRef.current.onmouseenter = () => isMouseOutofBox.current = false;
            //detect click events, click on the dropdown or not
            const onClickHandler = () => {
                isMouseOutofBox.current && setShow(false)
            }
            document.addEventListener('click', onClickHandler)
        }
        return () => {
            dropdownRef.current?.onmouseleave && (dropdownRef.current.onmouseleave = null);
            dropdownRef.current?.onmouseenter && (dropdownRef.current.onmouseenter = null);
            EffectRan.current = false
        }
    }, []);


    const forDesktop = <>
        <Button onClick={showDropdownHandler}
            text={text}
            design={design}
            Icon={<BiChevronDown size={arrowSize} />}
        />
        {show && dropdownElement}
    </>

    const forMobile = <>
        <Button onClick={showDropdownHandler}
            text={text}
            hideTextOnMobile={true}
            design={mobile?.design}
            Icon={[...mobile?.icon ?? '', <BiChevronDown className={buttoncx({ hide: hideArrowOnMobile })} size={arrowSize} />]}
        />
        {show && dropdownElement}
    </>

    return (
        <div ref={dropdownRef} className={cx('nav-with-dropdown', { active: show })}>
            {mobile ? forMobile : forDesktop}
        </div>
    );
}

export default ButtonDropdown;
