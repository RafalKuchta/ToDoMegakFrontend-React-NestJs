import {Btn} from "../../common/Btn";
import React, {SyntheticEvent, useContext, useState} from "react";
import {LoadingContext} from "../../../context/loading.context";

import './AddForm.css';
import {Spinner} from "../../common/Spinner/Spinner";
import {apiUrl} from "../../../config/api";

export const AddForm = () => {
    const {loading, setLoading} = useContext(LoadingContext);
    const [form, setForm] = useState({
        name: '',
    });

    const saveToDo = async (e: SyntheticEvent) => {
        e.preventDefault();

        setLoading(true);


        try {
            await fetch(`${apiUrl}/todo`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...form,
                }),
            })
            setForm({
                name: '',
            });

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
            <form className="add-task" onSubmit={saveToDo}>
                <input
                    type="text"
                    name="name"
                    required
                    maxLength={1000}
                    placeholder="Dodaj zadanie..."
                    value={form.name}
                    onChange={e => updateForm('name', e.target.value)}
                />
                <Btn text="Dodaj"/>
            </form>
        </div>
    )
}

