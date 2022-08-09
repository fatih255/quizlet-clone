import TwitterIcon from 'public/icons/social-media/twitter.svg';
import FacebookIcon from 'public/icons/social-media/facebook.svg';
import InstagramIcon from 'public/icons/social-media/instagram.svg';
import YoutubeIcon from 'public/icons/social-media/youtube.svg';
import ShieldIcon from 'public/icons/shield.svg';
import TabActive from 'public/icons/common/active-tab.svg';
import Logo from 'public/icons/logo.svg';
import LoginGoogle from 'public/icons/social-media/button/google.svg';
import LoginFacebook from 'public/icons/social-media/button/facebook.svg';

import styles from 'styles/variables.module.scss';

const QuizletIcon = ({ name, color = styles.grayColor350, ...props }) => {
    switch (name) {
        case 'twitter':
            return <TwitterIcon color={color} {...props} />
        case 'facebook':
            return <FacebookIcon color={color} {...props} />
        case 'instagram':
            return <InstagramIcon color={color} {...props} />
        case 'youtube':
            return <YoutubeIcon color={color} {...props} />
        case 'shield':
            return <ShieldIcon color={color} {...props} />
        case 'active-tab':
            return <TabActive color={color} {...props} />
        case 'logo':
            return <Logo color={color} {...props} />
        case 'login-google':
            return <LoginGoogle color={color} {...props} />
        case 'login-facebook':
            return <LoginFacebook color={color} {...props} />

    }
}

export default QuizletIcon