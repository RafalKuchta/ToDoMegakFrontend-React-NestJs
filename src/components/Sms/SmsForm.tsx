import React, {ChangeEvent, useEffect, useState} from 'react';
import {useNavigate} from "react-router";
import  './SmsForm.css';
import {apiUrl} from "../../config/api";

export const SmsForm = () => {
    const [select, setSelect] = useState(true);
    const [sms, setSms] = useState('');
    const [number, setNumber] = useState('');
    const [group, setGroup] = useState({});
    const [loading, setLoading] = useState(false);
    const [smsBase, setSmsBase] = useState([{
        id: '',
        name: '',
        phone: '',
    }]);

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

    const sendSms = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        let smsObj = {
            mobile_number: '+48' + number,
            message: sms,
        }

        let groupObj = {
            mobile_numbers: group,
            message: sms,
        }

        fetch(`${apiUrl}/sms_messages/`, {
            method:'POST',
            headers: {
                'content-type': 'application/json',
                accepts: "application/json"
            },
            body: JSON.stringify(select ? smsObj : groupObj)
        })
            .then(resp => resp.json())
            .then(resp => console.log(resp))

    }


    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === 'number') {
            setNumber(event.target.value);
        } else if (event.target.name === 'sms') {
            setSms(event.target.value);
        } else if (event.target.name === 'group') {
            setGroup(event.target.value);
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

    const addNumber = () => {
        navigate('/sms/add');
    }



    return (
        <div className="wrapper-sms">
            <h3>Bramka SMS!</h3>
            <p>
                <button onClick={addNumber}>Dodaj numer do bazy</button>
            </p>
            <form onSubmit={() =>sendSms}>

                <select name='select' onChange={(e) => handleChangeSelect(e)}>
                    <option value="1">Pojedyńczy sms</option>
                    <option value="2">Do grupy</option>
                </select>

                {select
                    ?   <select name='group' onChange={() => handleChange}>
                        {
                            smsBase.map(phone => (
                                <option key={phone.id} value={phone.name} >{phone.phone}</option>
                            ))
                        }
                    </select>


                    :   <select name='group' onChange={() => handleChange}>
                        <option value="" hidden>Wybierz grupę...</option>
                        <option value="Grupa 1">Grupa 1</option>
                        <option value="Grupa 2">Grupa 2</option>
                        <option value="Grupa 3">Grupa 3</option>
                        <option value="Grupa 4">Grupa 4</option>
                    </select>

                }

                <textarea name='sms' onChange={() => handleChange} placeholder="Wiadomość"></textarea>
                <button>Wyślij</button>
            </form>
        </div>
    );
}
