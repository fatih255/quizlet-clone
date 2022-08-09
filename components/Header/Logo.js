import React from 'react';
import Link from 'next/link';
import themeVariables from 'styles/variables.module.scss';
import QuizletIcon from 'public/icons/logo.svg';
import QuizletMobileIcon from 'public/icons/mobile-logo.svg';
import QuizletMobileMenuIcon from 'public/icons/mobile-menu-logo.svg';
import { cx } from './constants';
import { useRootStore } from 'providers/RootStoreProvider';
import { onClickWithUserSelectNone } from 'utils/ui';
import { IoCloseOutline } from 'react-icons/io5';
import { observer } from 'mobx-react-lite';

const Logo = () => {

    const { change_isMobileMenuActive, isMobileMenuActive } = useRootStore().UIStore;

    const onMouseDownHandler = (e) => {
        onClickWithUserSelectNone(() => change_isMobileMenuActive(), e)
    }

    return (
        <div
            className={cx('logo-container', { 'actived-mobile-menu': isMobileMenuActive })}>
            <Link href="/">
                <a className={cx('desktop-logo')} draggable="false" >
                    <QuizletIcon className={cx('logo')} width="95" height="22" color={themeVariables.primaryColor} />
                </a>
            </Link>
            {/*  show only on 761px width  quizled-lt-md */}
            <div className={cx('logo-container-for-mobile')} onMouseDown={(e) => onMouseDownHandler(e)}>
                <QuizletMobileIcon className={cx('mobile-logo')} size={45} color={themeVariables.primaryColor} />
                <QuizletMobileMenuIcon className={cx('mobile-logo-active-menu')} width={30} height={30} color={themeVariables.primaryColor} />
                <IoCloseOutline className={cx('close-mobile-menu')} size={30} />
            </div>
        </div>
    );
}


export default observer(Logo);
