import React, {useEffect, useState} from 'react';

import { Header } from './components/layout/Header';
import { Tasks } from './components/Tasks/Tasks';
import { SearchContext } from './context/search.context';
import { LoadingContext } from './context/loading.context';
import { Routes, Route } from 'react-router-dom';
import {EditTask} from "./components/Tasks/Edit/EditTask";
import { Login } from './components/Login/Login';
import {Register} from "./components/Register/Register";
import {ErrorPage} from "./components/Error/ErrorPage";
import {onCheck} from "./components/Login/Login.api";
import {MessageComponent} from "./components/Messages/MessageComponent";
import {Home} from "./components/Home/Home";
import {SmsForm} from "./components/Sms/SmsForm";
import {AddNumber} from "./components/Sms/Add/AddNumber";

export const App = () => {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const [{isLogined, email}, setIsLogined] = useState({
        isLogined: false,
        email: ''
    });

    useEffect(() => {
        (async () => {
            const response = await onCheck();

            if(response.ok){
                setIsLogined({
                    isLogined: response.ok,
                    email: response.email
                });
            }
            setLoading(false);
        })();
    }, [loading, search])

    return (
        <>
            <SearchContext.Provider value={{search, setSearch}}>
                <LoadingContext.Provider value={{loading, setLoading}}>

                    <Routes>
                        <Route path="/*" element={<ErrorPage />}/>
                        <Route path="/register" element={<Register />}/>
                        <Route
                            path ='/'
                            element = {
                                isLogined ? (
                                    <>
                                        <Header setIsLogined={{setIsLogined, email}} />
                                        <Home setIsLogined={setIsLogined}/>
                                    </>
                                )   : (
                                    <Login setIsLogined={setIsLogined} />
                                )
                            }
                        >
                        </Route>
                        <Route
                            path ='/todo'
                            element = {
                                isLogined ? (
                                    <>
                                        <Header setIsLogined={{setIsLogined, email}} />
                                        <Tasks setIsLogined={setIsLogined}/>
                                    </>
                                )   : (
                                    <Login setIsLogined={setIsLogined} />
                                )
                            }
                        >
                        </Route>
                        <Route
                            path ='/edit/:id'
                            element = {
                                isLogined ? (
                                    <>
                                        <Header setIsLogined={{setIsLogined, email}} />
                                        <EditTask />
                                    </>
                                )   : (
                                    <Login setIsLogined={setIsLogined} />
                                )
                            }
                        >
                        </Route>
                        <Route
                            path ='/chat'
                            element = {
                                isLogined ? (
                                    <>
                                        <Header setIsLogined={{setIsLogined, email}} />
                                        <MessageComponent />
                                    </>
                                )   : (
                                    <Login setIsLogined={setIsLogined} />
                                )
                            }
                        >
                        </Route>
                        <Route
                            path ='/sms'
                            element = {
                                isLogined ? (
                                    <>
                                        <Header setIsLogined={{setIsLogined, email}} />
                                        <SmsForm />
                                    </>
                                )   : (
                                    <Login setIsLogined={setIsLogined} />
                                )
                            }
                        >
                        </Route>
                        <Route
                            path ='/sms/add'
                            element = {
                                isLogined ? (
                                    <>
                                        <Header setIsLogined={{setIsLogined, email}} />
                                        <AddNumber />
                                    </>
                                )   : (
                                    <Login setIsLogined={setIsLogined} />
                                )
                            }
                        >
                        </Route>

                    </Routes>
                </LoadingContext.Provider>
            </SearchContext.Provider>
        </>
    );
}
