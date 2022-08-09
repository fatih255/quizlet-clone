import React from 'react'
import { useRootStore } from 'providers/RootStoreProvider';
import variables from 'styles/variables.module.scss';
import styles from './Modal.module.scss';
import { cxBind } from 'utils/ui';
import QuizletIcon from 'icons';
import { observer } from 'mobx-react-lite';
import SocialButton from 'components/SocialButton';
import Seperator from 'components/Seperator';


export default observer(ModalSignUp);

function ModalSignUp() {

    const cx = cxBind(styles);
    const { changeActiveModal } = useRootStore().UIStore;

    return (
        <>
            <div className={cx('modal-image')}>
                <h1>Çalışırken sağlam adımlar atın. Hemen üye olun.</h1>
            </div>
            <div className={cx('modal-right')}>
                <div className={cx('right-inner')}>
                    <div role="tablist" className={cx('tablist')}>
                        <h3 className={cx('active')} role="tab">
                            Üye olun
                            <QuizletIcon name="active-tab" color={variables.secondaryColor} />
                        </h3>
                        <h3 onClick={() => changeActiveModal('sign-in')} role="tab">Oturum açın</h3>
                    </div>
                    <div className={cx('social-container')}>
                        <div className={cx('social-btns')}>
                            <SocialButton socialMedia="google" />
                            <SocialButton socialMedia="facebook" />
                        </div>
                        <Seperator text="VEYA E-POSTA" />
                        {/* SignUp Form Area */}
                        <form>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
