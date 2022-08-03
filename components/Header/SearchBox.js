import React, { useEffect, useRef, useState } from 'react';
import themeVariables from 'styles/variables.module.scss';
import { TbSearch } from 'react-icons/tb';
import { IoCloseOutline } from 'react-icons/io5';
import { cx } from './constants';
import BackArrow from 'public/icons/common/back-arrow.svg'
import { userSelectNone } from 'utils/ui';

const Searchbox = () => {

    const [focusedSearchBox, setFocusedSearchBox] = useState(false);
    const searchBoxRef = useRef(null);

    const SearchIcon = () => <TbSearch className={cx('searchicon')} color={themeVariables.grayColor400} size={18} />
    const SearchInput = () => <input ref={searchBoxRef} className={cx({ expanded: focusedSearchBox })} onFocus={() => onFocusHandler()} type="text" placeholder="Çalışma setleri, ders kitapları, sorular" />

    const onFocusHandler = () => {
        setFocusedSearchBox(true);
    }

    const mobileClickIconHandler = () => {
        userSelectNone(() => {
            setFocusedSearchBox(!focusedSearchBox);
        }, true);
    }

    useEffect(() => {
        var r = document.querySelector(':root');
        r.style = focusedSearchBox ? '--navlink-container-display: none' : '--navlink-container-display: flex';
    }, [focusedSearchBox])

    return (
        <div className={cx('searchbox-container', { activecontainer: focusedSearchBox })}>
            <div className={cx('searchbox', { active: focusedSearchBox })}>
                <label onClick={() => !focusedSearchBox && mobileClickIconHandler()} className={cx('labelsearchbox')}>
                    <SearchIcon />
                    <SearchInput />
                </label>
                <IoCloseOutline
                    onClick={() => { /*searchBoxRef?.current.blur(); */ searchBoxRef.current.value = null; setFocusedSearchBox(false); }}
                    className={cx('closesearchbox', { hidden: !focusedSearchBox })}
                    color={themeVariables.grayColor400} size={25} />
                <BackArrow onClick={() => mobileClickIconHandler()} className={cx('search-box-backarrow')} />
            </div>
        </div>
    );
}

export default Searchbox;
