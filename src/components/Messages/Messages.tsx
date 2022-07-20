import React, {useEffect, useState} from 'react';

import './Messages.css';


export const Messages = ({messages} : {messages: string[]}) => {

    return (
        <div className="messages-page">
            <div>
                {
                    messages.map((message, index) =>
                        <div key={index}>{message}</div>
                    )
                }
            </div>
        </div>

    )
}