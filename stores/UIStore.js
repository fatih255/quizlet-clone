import { makeAutoObservable, observable } from "mobx"

class UIStore {
    isMobileMenuActive = false;

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    change_isMobileMenuActive() {
        this.isMobileMenuActive = !this.isMobileMenuActive;
    }
}


export default new UIStore();