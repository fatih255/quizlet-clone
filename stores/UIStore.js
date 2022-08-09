import { makeAutoObservable, observable, runInAction } from "mobx"

class UIStore {
    isMobileMenuActive = false;

    //modal settings
    activeModal = null;
    closingModal = false;
    changingModal = false;
    modalChangeMiliSeconds = 100;

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }


    //modal settings
    change_isMobileMenuActive() {
        this.isMobileMenuActive = !this.isMobileMenuActive;
    }
    changeActiveModal(modalname) {
        this.changingModal = true;
        setTimeout(() => {
            runInAction(() => {
                this.activeModal = modalname;
                this.changingModal = false;
            })

        }, this.modalChangeMiliSeconds);
    }
    changeClosingModal() {
        // Wrap all changes with runInAction
        runInAction(() => {
            this.closingModal = true;
        })
        setTimeout(() => {
            runInAction(() => {
                this.activeModal = null;
                this.closingModal = false;
            })

        }, this.modalChangeMiliSeconds);
    }
}



export default new UIStore();