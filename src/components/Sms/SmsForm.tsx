import React, {ChangeEvent, SyntheticEvent, useContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router";
import  './SmsForm.css';
import {apiUrl} from "../../config/api";
import {Done} from "../common/Done/Done";
import {AddNumberToSend, PhonesToSend} from "./Add-number-to-send/AddNumberToSend";
import {PhonesContext} from "../../context/phones.context";

export interface SmsInBase {
    id: string,
    phone: string,
    name: string,
    surname: string,
    company: string,
}

export const SmsForm = (props: any) => {
    const [select, setSelect] = useState(true);
    const [done, setDone] = useState(false)
    const [sms, setSms] = useState('');
    const [number, setNumber] = useState('');
    const {phones, setPhones} = useContext(PhonesContext);
    const [group, setGroup] = useState('');
    const [smsBase, setSmsBase] = useState<SmsInBase[]>([{
        id: '',
        name: '',
        surname: '',
        company: '',
        phone: '',
    }]);
    const [form, setForm] = useState({
        name: '',
    });
    const [isAddingNumber, setIsAddingNumber] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setSmsBase([]);
        (async () => {
            try {
                const res = await fetch(`${apiUrl}/sms/get-all`, {
                    method: 'get',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': `${apiUrl}`,
                    },
                    referrerPolicy: 'no-referrer',
                    credentials: 'include',
                    mode: 'cors',
                });

                const data = await res.json();

                setSmsBase(data);

            } catch (e) {
                // navigate('/login');
                throw (e as Error).message;
            }
        })();
    }, [])

    const sendSms = (e: SyntheticEvent) => {
        e.preventDefault();

        console.log(phones)

        let smsObj = {
            mobile_number: '+48' + number,
            message: sms,
            phones,
        }

        let groupObj = {
            mobile_numbers: group,
            message: sms,
        }

        console.log(smsObj)

        fetch(`${apiUrl}/sms/sms-send/`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': `${apiUrl}`,
            },
            referrerPolicy: 'no-referrer',
            credentials: 'include',
            mode: 'cors',
            body: JSON.stringify(select ? smsObj : groupObj)
        })
            .then(resp => resp.json())
            .then(resp => {
                console.log(resp)
                    if (resp.id) {
                        setDone(true)
                    }
                }
            )

    };

    if(done) {
        return <Done message={`Wiadomość o treści: ${sms} została wysłana do: ${number ?? group}.`} text="Powrót" to={"/"}/>
    }


    const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'number') {
            setNumber(e.target.value);
        } else if (e.target.name === 'sms') {
            setSms(e.target.value);
        } else if (e.target.name === 'group') {
            setGroup(e.target.value);
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
        // navigate('/sms/add-number-to-send');
        setIsAddingNumber(current => !current)

    }

    const addNumber = () => {
        navigate('/sms/add');
    }


    return (
        <div className="wrapper-sms">
            <h2>Bramka SMS!</h2>
            <p>
                <button onClick={addNumber}>Dodaj numer do bazy</button>
            </p>
            <form onSubmit={(e) => sendSms(e)}>

                <select name='select' onChange={(e) => handleChangeSelect(e)}>
                    <option value="1">Pojedyńczy sms</option>
                    <option value="2">Do grupy</option>
                </select>

                {select
                    ?   <input
                            type="number"
                            name='number'
                            className="input-one-sms"
                            placeholder="Wpisz numer telefonu..."
                            value={form.name}
                            onChange={(e) => handleChange(e)}
                        />


                    :   <select name='group' onChange={(e) => handleChange(e)}>
                            <option value="" hidden>Wybierz grupę...</option>
                            <option value="Grupa 1">Grupa 1</option>
                            <option value="Grupa 2">Grupa 2</option>
                            <option value="Grupa 3">Grupa 3</option>
                            <option value="Grupa 4">Grupa 4</option>
                        </select>

                }

                <button type="button" onClick={addNumberToSend}>Dodaj inne numery z bazy</button>

                {isAddingNumber ? <AddNumberToSend smsBase={smsBase} /> : null}

                <textarea name='sms' onChange={(e) => handleChange(e)} placeholder="Wiadomość"></textarea>
                <button type="submit">Wyślij</button>
            </form>
        </div>
    );
}
