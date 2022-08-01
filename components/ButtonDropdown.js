import Button from './Button';
import React, { useEffect, useRef, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import classNames from 'classnames/bind';
import styles from './ButtonDropdown.module.scss'
import buttonStyles from './Button.module.scss'


const cx = classNames.bind(styles);

const ButtonDropdown = ({
    text, design = 'btn-dropdown',
    dropdownElement,
    dropdownIconArrowSize = 22,
    dropdownIconDesign = '',
    textDesign = '',
    icons = () => null
}) => {



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

    const getIcons = icons({ cx: buttoncx })
    const iconCheck = getIcons !== null ? ((Array.isArray(getIcons)) ? getIcons.map((icon) => <React.Fragment key={key + 'i'} children={icon} />) : getIcons) : ''
    return (
        <div ref={dropdownRef} className={cx('nav-with-dropdown', { active: show })}>
            <Button onClick={showDropdownHandler}
                text={text}
                hideTextOnMobile={true}
                design={design}
                textDesign={textDesign}
                Icon={[iconCheck, <BiChevronDown className={buttoncx(dropdownIconDesign)} size={dropdownIconArrowSize} />]}
            />
            {show && dropdownElement}
        </div>
    );
}

export default ButtonDropdown;
