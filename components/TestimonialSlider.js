import React, { useEffect, useRef } from 'react';
import styles from './TestimonialSlider.module.scss';
import classNames from 'classnames/bind';
import { selectorSass } from 'utils/ui';

const TestimonialSlider = ({ items }) => {

    const cx = classNames.bind(styles);
    const { selector } = selectorSass(cx);
    const EffectRan = useRef(false);
    const isFirst = useRef(true);
    useEffect(() => {

        const testimonials = document.querySelectorAll('.testimonial');
        let counter = 0;

        const sliderInterval = () => setInterval(() => {
            if (testimonials[counter].classList.contains(cx('slide-out'))) {
                testimonials[counter].classList.replace(cx('slide-out'), cx('slide-in'));
            } else {
                !testimonials[counter].classList.contains(cx('first')) && testimonials[counter].classList.add(cx('slide-in'))
            }

            if (counter !== 0) {
                testimonials[counter - 1].classList.replace(cx('slide-in'), cx('slide-out'));
            }
            if (counter === 0 && testimonials[testimonials.length - 1].classList.contains(cx('slide-in'))) {
                testimonials[testimonials.length - 1].classList.replace(cx('slide-in'), cx('slide-out'));
            }
            counter = counter === testimonials.length - 1 ? 0 : counter + 1;

        }, 3000);

        if (!EffectRan.current) {
            sliderInterval()
        }
        return () => {
            clearInterval(sliderInterval);
            EffectRan.current = true;
        }

    }, [])

    return (
        <div className={cx('testimonial-slider')}>
            {items.map(({ content, person }, index) =>
                <div key={person + index} className={"testimonial " + cx({ 'slide-in': index === 0 })}>
                    <h3>{content}</h3>
                    <p>- {person}</p>
                </div>)}
        </div>
    );
}

export default TestimonialSlider;
