import React from 'react'
import styles from './HighlightButton.module.scss';
import classNames from 'classnames/bind';
import Link from 'next/link';

export default function HighlightButton({ type = 'button', href, text, ...props }) {

    const cx = classNames.bind(styles);
    return (
        <div className={cx('highlight-btn')}>

            {type === 'button' &&
                <button {...props}>
                    {text}
                </button>
            }

            {type === 'link' && <Link href={href}>
                <a>{text}</a>
            </Link>}

        </div>
    )
}
