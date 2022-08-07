import React from 'react'
import styles from './FlashCardImage.module.scss';
import classNames from 'classnames/bind';

export default function FlashCardImage({ title, text, image, imagePosition = 'right',design }) {

    const cx = classNames.bind(styles);

    return (
        <div className={cx('flashcard',design, { 'image-left': imagePosition === 'left', 'image-right': imagePosition === 'right' })}>
            <div>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
            <div className={cx('image-container')}>
                <img src={image} />
            </div>
        </div>
    )
}
