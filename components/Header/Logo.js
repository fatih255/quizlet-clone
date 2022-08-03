import React, { useEffect } from 'react';
import Link from 'next/link';
import themeVariables from 'styles/variables.module.scss';
import QuizletIcon from 'public/icons/logo.svg';
import QuizletMobileIcon from 'public/icons/mobile-logo.svg';
import { cx } from './constants';
import { useRootStore } from 'providers/RootStoreProvider';
import { onClickWithUserSelectNone } from 'utils/ui';

const Logo = () => {

    const { change_isMobileMenuActive } = useRootStore().UIStore;

    const onMouseDownHandler = () => {
        onClickWithUserSelectNone(() => change_isMobileMenuActive())
    }

    return (
        <div
            className={cx('logo-container')}>
            <Link href="/">
                <a draggable="false" >
                    <QuizletIcon className={cx('logo')} width="95" height="22" color={themeVariables.primaryColor} />
                </a>
            </Link>
            {/*  show only on 761px width  quizled-lt-md */}
            <div onMouseDown={() => onMouseDownHandler()}>
                <QuizletMobileIcon className={cx('mobile-logo')} size={45} color={themeVariables.primaryColor} />
            </div>
        </div>
    );
}


export default Logo;
