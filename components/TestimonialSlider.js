import React from 'react';
import styles from './TestimonialSlider.module.scss';
import classNames from 'classnames/bind';

const TestimonialSlider = () => {

    const cx = classNames.bind(styles);

    return (
        <div className={cx('testimonial-slider')}>
            <div>
                <h3>Quizlet, çalışmanın ne kadar eğlenceli ve önemli olabileceğini anlamamı sağladı! Bu yıl, okuldaki kimya dersindeki terimleri Quizlet'e ekledim ve yakındaki sınavım için şimdiden kendimi rahat hissediyorum.</h3>
                <p>- LITTLEBUTTERCUP, 17</p>
            </div>
        </div>
    );
}

export default TestimonialSlider;
