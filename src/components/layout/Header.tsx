import React, {useState} from 'react';
import './Header.css';
import {useNavigate} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';
import {getAxiosData} from "../Axios-api/Axios.api";

export const Header = ({setIsLogined}: any) => {
    const [isActive, setIsActive] = useState(false);

    const navigate = useNavigate();

    const handleClick = () => {
        setIsActive(current => !current);
    };

    const logout = async () => {
        await getAxiosData({
            url: "/auth/logout",
            method: "GET",
        });
        setIsLogined.setIsLogined({
            isLogined: false,
            email: "",
            role: '',
        });
        navigate('/sms', {replace: true})
    }


    return (
        <header className="header">
            <div className="nav">
                <NavLink to='/sms' className="logo">GBA Polska</NavLink>
                <NavLink to='/sms' className={({ isActive }) => (isActive ? "sms active" : "sms")}>Bramka Sms</NavLink>
                <NavLink to='/sent' className={({ isActive }) => (isActive ? "sent active" : "sent")}>Wysłane smsy</NavLink>
                <NavLink to='/numbers-list' className={({ isActive }) => (isActive ? "numbers-list active" : "numbers-list")}>Lista numerów</NavLink>
                <NavLink to='/chat' className={({ isActive }) => (isActive ? "chat active" : "chat")}>Chat</NavLink>
                {setIsLogined.roles === 'admin' ? <NavLink to='/todo' className={({isActive}) => (isActive ? "todo active" : "todo")}>To Do</NavLink> : null}

            </div>
            <div className='user'
                 unselectable="on"
            >
                <p onClick={handleClick}>{setIsLogined.email} ({setIsLogined.roles})
                    <FontAwesomeIcon className='ico' icon={faAngleDown}/>
                </p>

                {isActive ? <button onClick={() => logout()}>Wyloguj</button> : null}
            </div>
        </header>
    );
};
