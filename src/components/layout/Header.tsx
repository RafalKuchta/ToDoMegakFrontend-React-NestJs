import React, {useState} from 'react';
import './Header.css';
import {onLogout} from "../Login/Login.api";
import {useNavigate} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';

export const Header = ({setIsLogined}: any) => {
    const [isActive, setIsActive] = useState(false);

    const navigate = useNavigate();

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
        <header className="header">
            <div className="nav">
                <NavLink to='/' className="logo">MegaApp</NavLink>
                <NavLink to='/todo' className={({ isActive }) => (isActive ? "todo active" : "todo")}>To Do</NavLink>
                <NavLink to='/chat' className={({ isActive }) => (isActive ? "chat active" : "chat")}>Chat</NavLink>
                <NavLink to='/sms' className={({ isActive }) => (isActive ? "chat active" : "chat")}>Sms</NavLink>

            </div>
            <div className='user'
                 unselectable="on"
            >
                <p onClick={handleClick}>{setIsLogined.email}
                    <FontAwesomeIcon className='ico' icon={faAngleDown}/>
                </p>

                {isActive ? <button onClick={() => logout()}>Wyloguj</button> : null}
            </div>
        </header>
    );
};
