import React, {ChangeEvent, SyntheticEvent, useContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './SmsForm.css';
import {AddNumberToSend} from "./Add-number-to-send/AddNumberToSend";
import {PhonesContext} from "../../context/phones.context";
import {Toast} from "../Toast/Toast";
import {getAxiosData} from "../Axios-api/Axios.api";
import {GroupsContext} from "../../context/groups.context";
import {AddGroupToSend} from "./Add-group-to-send/AddGroupToSend";
import {getFetchData} from "../Fetch-api/Fetch-api";
import {ToastError} from "../Toast/Toast-error";

export interface SmsInBase {
    id: string,
    phone: string,
    name: string,
    surname: string,
    position: string,
    company: string,
}

export interface GroupsInBase {
    id: string,
    name: string,
}

export const SmsForm = (props: any) => {
    const [select, setSelect] = useState(true);
    const [done, setDone] = useState(false)
    const [sms, setSms] = useState('');
    const [number, setNumber] = useState('');
    const {phones, setPhones} = useContext(PhonesContext);
    const {groups, setGroups} = useContext(GroupsContext);
    const [groupsBase, setGroupsBase] = useState<GroupsInBase[]>([{
        id: '',
        name: '',
    }]);
    const [smsBase, setSmsBase] = useState([{}]);

    const [isAddingNumber, setIsAddingNumber] = useState(false);
    const [isAddingGroup, setIsAddingGroup] = useState(false);
    const [showAll, setShowAll] =useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setSmsBase([]);
        (async () => {
            try {
                const numbers = await getAxiosData({
                    url: "/sms/get-all",
                    method: "GET",
                });
                setSmsBase(numbers);

                const groups = await getAxiosData({
                    url: "/sms/groups/get-all",
                    method: "GET",
                });
                setGroupsBase(groups);
            } catch (e) {
                throw (e as Error).message;
            }
        })();
    }, [])

    const sendSms = async (e: SyntheticEvent) => {
        e.preventDefault();

        if(select && !number && phones.phone === '') {
            return ToastError('Wybierz przynajmniej jeden numer!');
        }
        if(!select && !number && groups.group === '') {
            return ToastError('Wpisz numer lub wybierz grupę!');
        }

        if(sms === '') {
            return ToastError('Wpisz tekst wiadomości!');
        }


        let smsObj = {
            mobile_number: number ?? null,
            message: sms,
            phones: phones.phone === '' ? null : phones,
        }

        let groupObj = {
            mobile_number: number ?? null,
            message: sms,
            groups: groups.group === '' ? null : groups,
        }

        Toast('Wysyłanie wiadomości...');

        getFetchData({
            url: '/sms/sms-send/',
            method: 'POST',
            body: JSON.stringify(select ? smsObj : groupObj)})
            .then(resp => resp.json())
            .then(resp => {
                    if (resp.message) {
                        setDone(true);
                        Toast('Wiadomości wysłana.');
                        setNumber('');
                        setSms('');
                        setIsAddingNumber(false);
                        setPhones({
                            id: '',
                            phone: ''
                        });
                        setIsAddingGroup(false);
                        setGroups({
                            id: '',
                            group: ''
                        });
                    }
                }
            )
    };


    const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'number') {
            setNumber(e.target.value);
        } else if (e.target.name === 'sms') {
            setSms(e.target.value);
        }
    }

    const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === '1') {
            setSelect(true);
        }
        if (e.target.value === '2') {
            setSelect(false);
        }
    }

    const addNumberToSend = () => {
        setIsAddingNumber(current => !current);
    }

    const addGroupToSend = () => {
        setIsAddingGroup(current => !current);
    }

    const addNumber = () => {
        navigate('/sms/add');
    }

    const showAllNumbers = () => {
        setShowAll(current => !current);
    }

    return (
        <div className="wrapper-sms">
            <ToastContainer autoClose={2000}/>
            <h2>Bramka SMS!</h2>
            <p>
                <button onClick={addNumber}>Dodaj numer do bazy</button>
            </p>
            <form onSubmit={(e) => sendSms(e)}>

                <select name='select' onChange={(e) => handleChangeSelect(e)}>
                    <option value="1">Pojedyńczy sms</option>
                    <option value="2">Do grupy</option>
                </select>
                <input
                    type="number"
                    name='number'
                    className="input-one-sms"
                    placeholder="Wpisz numer telefonu..."
                    value={number}
                    onChange={(e) => handleChange(e)}
                />

                {select ? <button type="button" className="button-add" onClick={addNumberToSend}>Dodaj inne numery z
                        bazy</button>
                    : <button type="button" className="button-add" onClick={addGroupToSend}>Wybierz grupę</button>}

                {isAddingNumber && select
                    ? <div
                        className={showAll ? "addNumberToSend-wrapper--showAll" : "addNumberToSend-wrapper"}
                        onDoubleClick={() => showAllNumbers()}
                        >
                          <AddNumberToSend
                            smsBase={smsBase}
                          />
                        </div>

                    : null}

                {isAddingGroup && !select
                    ? <div
                        className={showAll ? "addNumberToSend-wrapper--showAll" : "addNumberToSend-wrapper"}
                        onDoubleClick={() => showAllNumbers()}
                        >
                          <AddGroupToSend
                            groupsBase={groupsBase}
                          />
                        </div>
                    : null}



                <textarea
                    name='sms'
                    onChange={(e) => handleChange(e)}
                    placeholder="Wiadomość... maksymalnie 160 znaków!"
                    maxLength={160}
                    value={sms}
                />
                <button type="submit">Wyślij</button>
            </form>
        </div>
    );
}
