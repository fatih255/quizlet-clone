import React from 'react';
import Link from 'next/link';
import themeVariables from 'styles/variables.module.scss';
import QuizletIcon from 'public/icons/logo.svg';
import QuizletMobileIcon from 'public/icons/mobile-logo.svg';
import { userSelectNone } from 'utils/ui';
import { cx } from './constants';

const Logo = () => {

    const showMobileMenuHandler = () => {
        userSelectNone(() => {
            //handlers
            //display block -navlinks -dropdown
            //navlinks list
            //dropdown list
            /*
                flex-direction: column;
    width: 100%;
    align-items: flex-start;
    position: fixed;
    top: 0;
    left: 0;
    background: white; */

        });
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


export default React.memo(Logo);
