import React, {SyntheticEvent, useContext, useState} from 'react';
import './Header.css';
import {SearchContext} from "../../context/search.context";
import {AddForm} from "../Tasks/Add/AddForm";
import {onLogout} from "../Login/Login.api";
import {useNavigate} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

export const Header = ({setIsLogined}:any) => {
    const {search, setSearch} = useContext(SearchContext);
    const [isActive, setIsActive] = useState(false);

    const navigate = useNavigate();

    const setSearchFromLocalState = (e: SyntheticEvent) => {
        e.preventDefault();
        setSearch(search)
    }

    const handleClick = () => {
        setIsActive(current => !current);
    };

    const logout = async () => {
        await onLogout();
        setIsLogined.setIsLogined({
            isLogined: false,
            email: "",
        });
        navigate('/', {replace: true})
    }

    return (
        <header>
            <h1>To Do Lista
                <div className='user'>
                    <p onClick={handleClick}>Witaj: {setIsLogined.email}
                        <FontAwesomeIcon className='ico' icon={faAngleDown}/>
                    </p>

                    {isActive ? <button onClick={() => logout()}>Wyloguj</button> : null}
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
