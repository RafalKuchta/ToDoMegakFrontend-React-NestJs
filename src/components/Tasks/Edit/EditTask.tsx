import {Spinner} from "../../common/Spinner/Spinner";
import {Btn} from "../../common/Btn";
import React, {SyntheticEvent, useContext, useEffect, useState} from "react";
import {LoadingContext} from "../../../context/loading.context";

import './EditTask.css';
import {useNavigate, useParams} from "react-router";
import {apiUrl} from "../../../config/api";

export const EditTask = (props: object) => {
    const {loading, setLoading} = useContext(LoadingContext);
    const [form, setForm] = useState({name:""});

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/todo/${id}`);
            const data = await res.json();

            setForm({name: data.name});
        })();
    }, []);


    const editToDo = async (e: SyntheticEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            navigate('/', {replace: true})
            await fetch(`${apiUrl}/todo/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...form,
                }),
            })
        } finally {
            setLoading(false);
        }
    }


    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };

    return (
        <div className="wrapper">
            {(loading) ? <Spinner /> : null}
            <form className="add-task" onSubmit={editToDo}>
                <input
                    type="text"
                    name="name"
                    required
                    maxLength={1000}
                    placeholder="Nazwa zadania..."
                    value={form.name}
                    onChange={e => updateForm('name', e.target.value)}
                />
                <Btn text="Zapisz"/>
            </form>
        </div>
    )
}