import React, { useState } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Button from 'components/Button';
import Navlink from './Navlink';
import Searchbox from './SearchBox';
import Logo from './Logo';
import { NavigationItems } from './constants';
import { HeaderContext } from './context';

const Header = () => {

    const [focusedSearchBox, setFocusedSearchBox] = useState(false);
    const cx = classNames.bind(styles);

    return (
        <HeaderContext.Provider value={{ cx: cx }}>
            <div className={cx('navbar')}>
                <div className={cx('left')}>
                    <Logo />
                    {!focusedSearchBox && <Navlink items={NavigationItems} />}
                </div>
                <div className={cx('right')}>
                    <Searchbox focusState={{ focusedSearchBox, setFocusedSearchBox }} />
                    <Button text="Oturum Açın" design="btn-white" />
                    <Button text="Üye Olun" design="btn-secondary" />
                </div>
            </div>
        </HeaderContext.Provider >
    );
};

export default Header;
