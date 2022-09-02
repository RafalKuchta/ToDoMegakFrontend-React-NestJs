import {createContext} from "react";

export const PhonesContext = createContext({
    phones: {},
    setPhones: (phones: any) => {},
});