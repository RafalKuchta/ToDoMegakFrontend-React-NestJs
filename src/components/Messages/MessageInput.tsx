import React, {useState} from 'react';
import {onSendMessage} from "./Messenger.api";

export const MessageInput = ({send}: {send: (value: string) => void}) => {
    const [value, setValue] = useState("");

    const sendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(value)

        const response = await onSendMessage({
            message: value
        })

    }

    return (
        <>
            <form onSubmit={sendMessage}>
                <input
                    type="text"
                    placeholder="Wpisz wiadomość..."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    required
                />
                <button onClick={() => send(value)}>Wyślij</button>
            </form>
        </>
    )
}