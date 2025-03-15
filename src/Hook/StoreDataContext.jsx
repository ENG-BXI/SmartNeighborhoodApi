import { createContext, useState } from "react";
import { Outlet } from "react-router";

export let storeData = createContext({});

export function StoreData() {
    let [data, setData] = useState({});
    return <storeData.Provider value={{ data, setData }} >
        <Outlet/>
    </storeData.Provider>
}