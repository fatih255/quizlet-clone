import React from 'react';
import Link from 'next/link';
import { useHeaderContext } from './context';
import themeVariables from 'styles/variables.module.scss';
import QuizletIcon from 'public/icons/logo.svg';
import QuizletMobileIcon from 'public/icons/mobile-logo.svg';


const Logo = () => {
    const { cx } = useHeaderContext();

    const showMobileMenuHandler = () => {
        document.documentElement.style.userSelect = 'none'
        //handler
        document.documentElement.style.userSelect = null

    }

    return (
        <div className={cx('logo-container')}>
            <Link href="/">
                <a>
                    <QuizletIcon className={cx('logo')} width="95" height="22" color={themeVariables.primaryColor} />
                </a>
            </Link>
            {/*  show only on 761px width  quizled-lt-md */}
            <div onClick={showMobileMenuHandler}>
                <QuizletMobileIcon className={cx('mobile-logo')} size={45} color={themeVariables.primaryColor} />
            </div>
        </div>
    );
}


export default Logo;
