import {createContext} from "react";

export const GroupsContext = createContext({
    groups: {},
    setGroups: (groups: any) => {},
});