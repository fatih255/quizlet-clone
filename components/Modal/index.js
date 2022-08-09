import { useRootStore } from 'providers/RootStoreProvider';
import { observer } from 'mobx-react-lite';

//modal layouts
import DefaultLayout from './Layouts/DefaultLayout';

//modals
import ModalSignUp from './ModalSignUp';
import ModalSignIn from './ModalSignIn';


const Modal = () => {
    const { activeModal } = useRootStore().UIStore;
    switch (activeModal) {
        case 'sign-up':
            return <DefaultLayout children={<ModalSignUp />} />
        case 'sign-in':
            return <DefaultLayout children={<ModalSignIn />} />
        default:
            return <div style={{ display: 'none' }}></div>
    }
}


export default observer(Modal);