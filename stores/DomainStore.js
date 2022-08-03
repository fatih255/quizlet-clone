import { makeAutoObservable } from "mobx"

class DomainStore {
    constructor() {
        makeAutoObservable(this)
    }
}


export default new DomainStore();