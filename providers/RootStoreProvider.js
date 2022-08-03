import { createContext, useContext } from "react";
import RootStore from "stores/RootStore";


let store;
const StoreContext = createContext(RootStore ?? undefined);
StoreContext.displayName = "StoreContext";

// function to initialize the store
export function useRootStore() {
    const context = useContext(StoreContext);
    if (context === undefined) {
        throw new Error("useRootStore must be used within RootStoreProvider");
    }
    return context;
}

export function RootStoreProvider({ children, hydrationData = undefined }) {

    //  hidrasyon verilerini başlatma işlevine iletin
    // pass the hydration data to the initialization function
    const store = initializeStore(hydrationData);

    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
}

function initializeStore(initialData = undefined) {
    const _store = store ?? RootStore;

    // if there is data call the root store hydration method
    if (initialData) {
        _store.hydrate(initialData);
    }

    // For server side rendering always create a new store 
    // For SSG and SSR always create a new store
    if (typeof window === "undefined") return _store;
    //Create the store once in the client
    if (!store) store = _store;

    return _store;
}
