import {createContext} from "react";

export const PhonesContext = createContext({
    phones: {
        id: '',
        phone: ''
    },
    setPhones: (phones: any) => {},
});