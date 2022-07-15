import React, {useState} from 'react';

import './Register.css';
import {onRegister} from "../Login/Login.api";
import {useNavigate} from "react-router";


export const Register = () => {
    const [{email, pwd, repeatPwd}, setRegisterData] = useState({
        email: '',
        pwd: '',
        repeatPwd: '',
    });
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const register = async (e: React.FormEvent) => {
        e.preventDefault();

        if( pwd === repeatPwd){
            const response = await onRegister({
                email,
                pwd,
            })

            navigate('/', {replace: true})

            if(response && response.error){
                setError(response.error)
            }

        } else {
            setError("Oba hasła muszą być takie same!")
        }
    };

    return (
        <>
            <h2 className="register">Rejestracja użytkownika</h2>
            <form className="register-form" onSubmit={register}>
                <label htmlFor="email">Email</label>
                <input
                    value={email}
                    name="email"
                    onChange={(e) => setRegisterData({
                        email: e.target.value,
                        pwd,
                        repeatPwd,
                    })}
                />
                <label htmlFor="pwd">Hasło</label>
                <input
                    value={pwd}
                    type="password"
                    name="pwd"
                    onChange={(e) => setRegisterData({
                        email,
                        pwd: e.target.value,
                        repeatPwd,
                    })}
                />
                <label htmlFor="pwd">Powtórz hasło</label>
                <input
                    value={repeatPwd}
                    type="password"
                    name="pwd"
                    onChange={(e) => setRegisterData({
                        email,
                        pwd,
                        repeatPwd: e.target.value,
                    })}
                />
                <button type="submit">Zapisz</button>
                {error.length > 0 && <p>{error}</p>}
            </form>
        </>

    )
};