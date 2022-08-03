import React, { useEffect, useRef, useState } from 'react';
import themeVariables from 'styles/variables.module.scss';
import { TbSearch } from 'react-icons/tb';
import { IoCloseOutline } from 'react-icons/io5';
import { cx } from './constants';
import BackArrow from 'public/icons/common/back-arrow.svg'
import { changeCSS_RootVariable } from 'utils/ui';
import UseScreenWidth from 'hooks/useScreenWidth';

const Searchbox = () => {

    const [focusedSearchBox, setFocusedSearchBox] = useState(false);
    const searchBoxRef = useRef(null);

    const SearchIcon = () => <TbSearch className={cx('searchicon')} color={themeVariables.grayColor400} size={18} />
    const SearchInput = () => <input ref={searchBoxRef} className={cx({ expanded: focusedSearchBox })} onFocus={() => onFocusHandler()} type="text" placeholder="Çalışma setleri, ders kitapları, sorular" />

    const onFocusHandler = () => {
        setFocusedSearchBox(true);
    }

    const mobileClickIconHandler = (e) => {
        setFocusedSearchBox(!focusedSearchBox)
    }

    changeCSS_RootVariable({
        trigger: focusedSearchBox,
        variableName: '--navlink-container-display',
        value: { true: 'none', false: 'flex' }
    })

    const searchBoxButtonShow = UseScreenWidth(1280); // ------->1280 show button


    return (
        <div className={cx('searchbox-container', { activecontainer: focusedSearchBox })}>
            <div className={cx('searchbox', { active: focusedSearchBox })}>

                {searchBoxButtonShow && !focusedSearchBox ?
                    <button onClick={() => !focusedSearchBox && mobileClickIconHandler()}>
                        <SearchIcon />
                        <SearchInput />
                    </button>
                    : <label onClick={() => !focusedSearchBox && mobileClickIconHandler()} className={cx('labelsearchbox')}>
                        <SearchIcon />
                        <SearchInput />
                    </label>}
                <div className={cx('closesearchbox-container')} tabIndex="0" role="button" >
                    <IoCloseOutline
                        onClick={() => { /*searchBoxRef?.current.blur(); */ searchBoxRef.current.value = null; setFocusedSearchBox(false); }}
                        className={cx('closesearchbox', { hidden: !focusedSearchBox })}
                        color={themeVariables.grayColor400} size={25} />
                </div>

                <BackArrow onClick={(e) => mobileClickIconHandler(e)} className={cx('search-box-backarrow')} />
            </div>
        </div>
    );
}

export default Searchbox;
