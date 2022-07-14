import React, {SyntheticEvent, useContext, useState} from 'react';
import './Header.css';
import {SearchContext} from "../../context/search.context";
import {AddForm} from "../Tasks/Add/AddForm";
import {onLogout} from "../Login/Login.api";

export const Header = ({email}:any) => {
    const {search, setSearch} = useContext(SearchContext);
    const [isActive, setIsActive] = useState(false);
    // const [inputVal, setInputVal] = useState(search);

    const setSearchFromLocalState = (e: SyntheticEvent) => {
        e.preventDefault();
        setSearch(search)
    }

    const handleClick = (e: SyntheticEvent) => {
        setIsActive(current => !current);
    };

    const logout = async () => {
        const response = await onLogout();
        console.log(response)
    }

    return (
        <header>
            <h1>---
                <div className={isActive ? 'user logout-btn' : 'user'} onClick={handleClick}>
                    <p>Witaj: {email}</p>
                    <button onClick={() => logout()}>Wyloguj</button>
                </div>

                <form onSubmit={setSearchFromLocalState}>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Szukaj zadania..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}/>
                </form>
            </h1>

            <AddForm />

        </header>
    );
};
