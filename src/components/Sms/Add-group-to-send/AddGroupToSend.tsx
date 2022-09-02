import React, {ChangeEvent, useContext, useState} from 'react';
import './AddGroupToSend.css'
import {GroupsContext} from "../../../context/groups.context";

export interface GroupToSend {
    id: string,
    group: string,
}

export const AddGroupToSend = ({groupsBase}: any) => {
    const {groups, setGroups} = useContext(GroupsContext);
    const [groupsToSend, setGroupsToSend] = useState<GroupToSend[]>([]);

    const onHandleAddGroupToSend = (e: ChangeEvent<HTMLInputElement>, group: string, id: string) => {
        if (e.target.checked) {
            groupsToSend.push({group: group, id: id});
            setGroups(groupsToSend)
        } else {
            const filter = groupsToSend.filter(group => group.id !== id)
            setGroupsToSend(filter);
            setGroups(filter);
        }
    }

    return (
        <>
            {groupsBase
                .sort((a: any, b: any) => a.surname > b.surname ? 1 : -1,)
                .map((group: any) => (
                    <div
                        className="addGroupToSend"
                        key={group.id}
                    >
                        <label
                            className="addGroupToSend--paragraf"
                            htmlFor={group.id}
                        > {group.name}
                        </label>
                        <input
                            type="checkbox"
                            className="addGroupToSend--checkbox"
                            name="add-group"
                            id={group.id}
                            value="add-group"
                            onChange={(e) => onHandleAddGroupToSend(e, group.name, group.id)}
                        />
                    </div>
                ))}

        </>
    )
}