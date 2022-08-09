import React from 'react'
import styles from './HighlightButton.module.scss';
import Link from 'next/link';
import { cxBind } from 'utils/ui';

export default function HighlightButton({ type = 'button', href, text, ...props }) {

    const cx = cxBind(styles);
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
