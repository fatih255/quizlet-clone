import React from 'react'
import styles from './FlashCardImage.module.scss';
import { cxBind } from 'utils/ui';

export default function FlashCardImage({ title, subtitle, text, image, imagePosition = 'right', design, button = undefined }) {

    const cx = cxBind(styles);

    return (
        <div className={cx('flashcard', design, { 'image-left': imagePosition === 'left', 'image-right': imagePosition === 'right' })}>
            <div>
                {subtitle ? <div className={cx('with-subtitle')}>
                    <h5>{subtitle}</h5>
                    <h3>{title}</h3>
                </div>
                    : <h3>{title}</h3>
                }
                <p className={cx('content')}>{text}</p>
                {button && button}
            </div>
            <div className={cx('image-container')}>
                <img src={image} />
            </div>

        </div>
    )
}
