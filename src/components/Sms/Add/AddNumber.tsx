import React, {useState} from 'react';
import './AddNumber.css';
import {useNavigate} from "react-router";
import {apiUrl} from "../../../config/api";
import {Done} from "../../common/Done/Done";

export const AddNumber = () => {
    const [select, setSelect] = useState(true);
    const [done, setDone] = useState(false)
    const [number, setNumber] = useState('');
    const [group, setGroup] = useState({});
    const [form, setForm] = useState({
        name: '',
        surname: '',
        company: '',
        phone: '',
        group: '',
    });

    const addNumber = async (event: any) => {
        setDone(false)
        event.preventDefault();

        await fetch(`${apiUrl}/sms`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': `${apiUrl}`,
            },
            referrerPolicy: 'no-referrer',
            credentials: 'include',
            mode: 'cors',
            body: JSON.stringify(form)
        })
            .then(resp => resp.json())
            .then(resp => {
                    if (resp.id) {
                        setDone(true)
                    }
                }
            )
    }


    if(done) {
        return <Done text={`Numer ${form.phone} dodany do bazy.`}/>
    }

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };

    const handleChange = (event: any) => {
        console.log(event.target.name, event.target.value)
        if (event.target.name === 'number') {
            setNumber(event.target.value);
        } else if (event.target.name === 'group') {
            setGroup(event.target.value);
        }
    }

    const handleChangeSelect = (event: any) => {
        if (event.target.value === '1') {
            setSelect(true);
        }
        if (event.target.value === '2') {
            setSelect(false);
        }
    }


    return (
        <div className="wrapper-add-phones">
            <h3>Dodaj numer do bazy!</h3>

            <form onSubmit={addNumber}>
                <label>Wybierz:</label>
                <select
                    name='select'
                    onChange={handleChangeSelect}
                    required
                >
                    <option value="1">Dodaj numer do bazy</option>
                    <option value="2">Dodaj numer do grupy</option>
                </select>

                {select
                    ? <div>
                        <input
                            name='name'
                            value={form.name}
                            onChange={e => updateForm('name', e.target.value)}
                            placeholder="Imię"
                        />
                        <input
                            name='surname'
                            value={form.surname}
                            onChange={e => updateForm('surname', e.target.value)}
                            placeholder="Nazwisko"
                        />
                        <input
                            name='company'
                            value={form.company}
                            onChange={e => updateForm('company', e.target.value)}
                            placeholder="Firma"
                        />
                        <input
                            name='phone'
                            type='number'
                            value={form.phone}
                            onChange={e => updateForm('phone', e.target.value)}
                            placeholder="Numer Telefonu"
                        />
                    </div>


                    : <div>
                        <select
                            name='group'
                            value={form.group}
                            onChange={e => updateForm('group', e.target.value)}
                            required
                        >
                            <option value="" hidden>Wybierz grupę...</option>
                            <option value="Grupa 1">Grupa 1</option>
                            <option value="Grupa 2">Grupa 2</option>
                            <option value="Grupa 3">Grupa 3</option>
                            <option value="Grupa 4">Grupa 4</option>
                        </select>
                        <input
                            name='name'
                            value={form.name}
                            onChange={e => updateForm('name', e.target.value)}
                            placeholder="Imię"
                        />
                        <input
                            name='surname'
                            value={form.surname}
                            onChange={e => updateForm('surname', e.target.value)}
                            placeholder="Nazwisko"
                        />
                        <input
                            name='company'
                            value={form.company}
                            onChange={e => updateForm('company', e.target.value)}
                            placeholder="Firma"
                        />
                        <input
                            name='phone'
                            value={form.phone}
                            onChange={e => updateForm('phone', e.target.value)}
                            placeholder="Numer Telefonu"
                        />
                    </div>
                }

                <button>Wyślij</button>
            </form>
        </div>
    );
}
