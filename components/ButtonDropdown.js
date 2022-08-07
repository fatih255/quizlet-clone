import Button from './Button';
import React, { useEffect, useRef } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import classNames from 'classnames/bind';
import styles from './ButtonDropdown.module.scss'
import buttonStyles from './Button.module.scss'
import UseDropDownBox from 'hooks/UseDropDownBox';
import { observer } from 'mobx-react-lite';
import { useRootStore } from 'providers/RootStoreProvider';


const cx = classNames.bind(styles);
const initialValues = {
    design: 'btn-dropdown'
}

const ButtonDropdown = ({
    text, design = initialValues.design,
    dropdownElement,
    dropdownIconArrowSize = 22,
    dropdownIconDesign = '',
    textDesign = '',
    alwaysOpenOnMobile = false,
    icons = () => null
}) => {

    const dropdownRef = useRef(null);
    const buttoncx = classNames.bind(buttonStyles);
    const getIcons = icons({ cx: buttoncx })
    const iconCheck = getIcons !== null ? ((Array.isArray(getIcons)) ? getIcons.map((icon) => <React.Fragment key={key + 'i'} children={icon} />) : getIcons) : ''
    const { show, setShowHandler } = UseDropDownBox(dropdownRef);
    const { isMobileMenuActive } = useRootStore().UIStore;


    useEffect(() => {
        if (isMobileMenuActive && alwaysOpenOnMobile) {
            setShowHandler()
        }

    }, [isMobileMenuActive]);


    return (
        <div ref={dropdownRef} className={cx('nav-with-dropdown', { active: show })}>
            <Button onClick={setShowHandler}
                text={text}
                design={[...designCheck(design, 'btn-', initialValues.design), alwaysOpenOnMobile ? 'pointer-events-none' : '']}
                textDesign={textDesign}
                Icon={[iconCheck, <BiChevronDown className={buttoncx(dropdownIconDesign)} size={dropdownIconArrowSize} />]}
            />
            {show && dropdownElement}
        </div>
    );
}

export default observer(ButtonDropdown);





function designCheck(design, searchword, initialValue) {
    let designValue = [];
    if (Array.isArray(design)) {
        if (design.some(design => design.includes(searchword))) {
            designValue = [...design];
        } else {
            designValue = [...design, initialValue];
        }
    } else {
        if (!design.includes(searchword)) {
            designValue = [design, initialValue];
        } else {
            designValue = [design]
        }
    }
    return designValue;
}

