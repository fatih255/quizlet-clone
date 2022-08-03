import DomainStore from "./DomainStore";
import UIStore from "./UIStore";


class RootStore {
    UIStore = UIStore;
    DomainStore = DomainStore;

    constructor() { }

    hydrate(data) {
        if (data.stopwatchStore) {
            this.DomainStore.hydrate(data.stopwatchStore);
        }
    }
}
export default new RootStore();