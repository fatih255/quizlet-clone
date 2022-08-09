import QuizletIcon from 'icons';
import React from 'react';
import { cxBind } from 'utils/ui';
import styles from './SocialButton.module.scss';

const SocialButton = ({ socialMedia }) => {

    const cx = cxBind(styles);

    switch (socialMedia) {
        case 'google':
            return <a href="#google-login" className={cx('social-btn')}>
                <QuizletIcon name="login-google" width={20} />
                <span>Google ile devam edin</span>
            </a>
        case 'facebook':
            return <a href="#facebook-login" className={cx('social-btn')}>
                <QuizletIcon name="login-facebook" width={20} />
                <span>Facebook ile devam edin</span>
            </a>
    }
}

export default SocialButton;
