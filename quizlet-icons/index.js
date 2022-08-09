import TwitterIcon from 'public/icons/social-media/twitter.svg'
import FacebookIcon from 'public/icons/social-media/facebook.svg'
import InstagramIcon from 'public/icons/social-media/instagram.svg'
import YoutubeIcon from 'public/icons/social-media/youtube.svg'
import ShieldIcon from 'public/icons/shield.svg'
import styles from 'styles/variables.module.scss';

const QuizletIcon = ({ name, groupColor = styles.grayColor350 }) => {
    switch (name) {
        case 'twitter':
            return <TwitterIcon color={groupColor} />
        case 'facebook':
            return <FacebookIcon color={groupColor} />
        case 'instagram':
            return <InstagramIcon color={groupColor} />
        case 'youtube':
            return <YoutubeIcon color={groupColor} />
        case 'shield':
            return <ShieldIcon color={groupColor} />

    }
}

export default QuizletIcon