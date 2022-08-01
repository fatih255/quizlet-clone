import React, { useRef } from 'react';
import UseScreenWidth from 'hooks/useScreenWidth';
import themeVariables from 'styles/variables.module.scss';
import { TbSearch } from 'react-icons/tb';
import { IoCloseOutline } from 'react-icons/io5';
import { useHeaderContext } from './context';
import BackArrow from 'public/icons/common/back-arrow.svg'



const Searchbox = ({ focusState: { focusedSearchBox, setFocusedSearchBox } }) => {

    const { cx } = useHeaderContext();
    const searchBoxRef = useRef(null);

    const { responsiveBreakPoint } = UseScreenWidth()


    const SearchIcon = () => <TbSearch className={cx('searchicon')} color={themeVariables.grayColor400} size={18} />
    const SearchInput = () => <input ref={searchBoxRef} className={cx({ expanded: focusedSearchBox })} onFocus={() => setFocusedSearchBox(true)} type="text" placeholder="Çalışma setleri, ders kitapları, sorular" />

    const mobileClickIconHandler = () => {
        setFocusedSearchBox(!focusedSearchBox)
    }

    return (
        <div className={cx('searchbox-container', { activecontainer: focusedSearchBox })}>
            <div className={cx('searchbox', { mobilesearchbox: true }, { active: focusedSearchBox })}>
                <label onClick={() => !focusedSearchBox && mobileClickIconHandler()} className={cx('labelsearchbox')}>
                    <SearchIcon />
                    <SearchInput />
                </label>
                <IoCloseOutline onClick={() => { /*searchBoxRef?.current.blur(); */ searchBoxRef.current.value = null; setFocusedSearchBox(false); }} className={cx('closesearchbox', { hidden: !focusedSearchBox }, { show: focusedSearchBox })} color={themeVariables.grayColor400} size={25} />
                <BackArrow onClick={() => mobileClickIconHandler()} className={cx('search-box-backarrow')} />
            </div>
        </div>
    );
}

export default Searchbox;
