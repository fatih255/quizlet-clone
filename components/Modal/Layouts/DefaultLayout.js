import React from 'react';
import styles from './defaultLayout.module.scss';
import { cxBind } from 'utils/ui';
import { useRootStore } from 'providers/RootStoreProvider';
import { IoCloseOutline } from 'react-icons/io5';
import { observer } from 'mobx-react-lite';


const DefaultLayout = ({ children }) => {

    const { closingModal, changingModal, changeClosingModal, } = useRootStore().UIStore;

    const cx = cxBind(styles);
    const closeHandler = () => {
        changeClosingModal();
    }

    return (
        <div className={cx('modal', 'fadeIn', { fadeOut: closingModal || changingModal })}>
            <IoCloseOutline onClick={closeHandler} className={cx('close-modal')} size={27} />
            <div className={cx('modal-inner')}>
                {children}
            </div>
        </div>
    );
}

export default observer(DefaultLayout);
