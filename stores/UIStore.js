import { makeAutoObservable } from "mobx"

class UIStore {
    isMobileMenuActive = false;

    constructor() {
        makeAutoObservable(this)
    }

    change_isMobileMenuActive() {
        isMobileMenuActive = !isMobileMenuActive;
    }
}


export default new UIStore();