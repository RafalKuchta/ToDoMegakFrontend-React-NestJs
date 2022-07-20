import React from 'react';
import './Done.css';
import {useNavigate} from "react-router";

interface Props {
    text: string;
}

export const Done = (props: Props) => {
    const navigate = useNavigate();

    return (
        <div className="done">
            <h3>{props.text}</h3>
            <button className='done-btn' onClick={() => navigate('/sms', {replace: true})} >Powrót</button>
        </div>
    )
}