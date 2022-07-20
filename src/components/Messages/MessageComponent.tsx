import React, {useEffect, useState} from 'react';

import './Messages.css';
import {io, Socket} from "socket.io-client";
import {MessageInput} from "./MessageInput";
import {Messages} from "./Messages";

export const MessageComponent = () => {
    const [socket, setSocket] = useState<Socket>();
    const [messages, setMessages] = useState<string[]>([]);

    const send = (value: string) => {
        socket?.emit('message', value)
    }

    useEffect(() => {
        const newSocket = io("http://localhost:3002");
        setSocket(newSocket)
    }, [setSocket]);

    const messageListener = (message: string) => {
        setMessages([...messages, message])
    };


    useEffect(() => {
        socket?.on("message", messageListener)
        return () => {
            socket?.off("message", messageListener)
        }
    }, [messageListener]);

    return (
        <div className="messages-page">
            <h2>Chat</h2>
            <MessageInput send={send}/>
            <Messages messages={messages}/>
        </div>

    )
}