import React from 'react';
import { cxBind } from 'utils/ui';
import styles from './Seperator.module.scss';

const Seperator = ({ text }) => {

    const cx = cxBind(styles);

    return (
        <div className={cx('seperator')}>
            <div>
                <hr />
            </div>
            <div>{text}</div>
            <div>
                <hr />
            </div>
        </div>
    );
}

export default Seperator;
