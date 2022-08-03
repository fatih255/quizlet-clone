import React from 'react';
import Button from 'components/Button';
import Navlink from './Navlink';
import Searchbox from './SearchBox';
import Logo from './Logo';
import { NavigationItems, cx } from './constants';
const Header = () => {


    return (
        <div className={cx('navbar')}>
            <div className={cx('left')}>
                <Logo />
                <Navlink items={NavigationItems} />
            </div>
            <div className={cx('right')}>
                <Searchbox />
                <Button text="Oturum Açın" design="btn-white" />
                <Button text="Üye Olun" design="btn-secondary" />
            </div>
        </div>
    );
};

export default Header;
