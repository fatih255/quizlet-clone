import React, { useEffect, useRef, useState } from 'react';

const UseDropDownBox = (dropdownRef) => {

    const [show, setShow] = useState(false);
    const isMouseOutofBox = useRef(false);
    const EffectRan = useRef(false);

    const setShowHandler = () => {
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

    return { show: show, setShowHandler: setShowHandler }
}

export default UseDropDownBox;
