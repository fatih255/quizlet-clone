import React from 'react'
import { useRootStore } from 'providers/RootStoreProvider';
import variables from 'styles/variables.module.scss';
import styles from './Modal.module.scss';
import { cxBind } from 'utils/ui';
import QuizletIcon from 'icons';
import { observer } from 'mobx-react-lite';

export default observer(ModalSignIn);

function ModalSignIn() {
    const cx = cxBind(styles);
    const { changeActiveModal } = useRootStore().UIStore;

    return (
        <>
            <div className={cx('modal-image')}>
                <h1>Çalışırken konforunuzdan vazgeçmeyin.</h1>
                <QuizletIcon className={cx('logo')} name="logo" color="white" width="6rem" />
            </div>
            <div className={cx('modal-right')}>
                <div className={cx('right-inner')}>
                    <div role="tablist" className={cx('tablist')}>
                        <h3 onClick={() => changeActiveModal('sign-up')} role="tab">
                            Üye olun
                        </h3>
                        <h3 className={cx('active')} role="tab">
                            Oturum açın
                            <QuizletIcon name="active-tab" color={variables.secondaryColor} />
                        </h3>
                    </div>
                </div>
            </div>
        </>
    )
}


