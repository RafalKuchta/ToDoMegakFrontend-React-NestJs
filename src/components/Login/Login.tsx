import React, { useState } from "react";

import './Login.css'
import {onLogin} from "./Login.api";
import {Link} from "react-router-dom";

export const Login = ({setIsLogined}:any) => {
    const [{email, pwd}, setCredentials] = useState({
        email: "",
        pwd: "",
    })
    const [error, setError] = useState('');

    const login = async (e: React.FormEvent) => {
        e.preventDefault();

        setError('')
        const response = await onLogin({
            email,
            pwd,
        });

        if(response.ok){
            setIsLogined({
                isLogined: response.ok,
                email: response.email,
            });
        }

        if(response && response.error) {
            setError(response.error)
        }

    }

    return (
        <>
            <h2 className="login">Zaloguj</h2>
            <form className="login-form" onSubmit={login}>
                <label htmlFor="username">Email</label>
                <input
                    type="email"
                    value={email}
                    required
                    onChange={(e) => setCredentials({
                        email: e.target.value,
                        pwd,
                    })}
                />

                <label htmlFor="password">Hasło</label>
                <input
                    type="password"
                    required
                    onChange={(e) => setCredentials({
                        email,
                        pwd: e.target.value,
                    })}
                />
                <div className="login-submit">
                    <button type="submit">Zaloguj</button> <Link to="/register">Zarejestruj się</Link>
                </div>

                {error.length > 0 && <p>{error}</p>}


            </form>

        </>
    );
};
