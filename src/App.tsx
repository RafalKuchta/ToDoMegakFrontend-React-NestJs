import React, {useEffect, useState} from 'react';

import { Header } from './components/layout/Header';
import { Tasks } from './components/Tasks/Tasks';
import { SearchContext } from './context/search.context';
import { LoadingContext } from './context/loading.context';
import { Routes, Route } from 'react-router-dom';
import {EditTask} from "./components/Tasks/Edit/EditTask";
import { Login } from './components/Login/Login';
import {Register} from "./components/Register/Register";

export const App = () => {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [{isLogined, email}, setIsLogined] = useState({
        isLogined: true,
        email: ''
    });


    return (
        <>
            <SearchContext.Provider value={{search, setSearch}}>
                <LoadingContext.Provider value={{loading, setLoading}}>

                    <Routes>
                        {/*<Route path="/edit/:id" element={<EditTask />}/>*/}
                        <Route path="/register" element={<Register />}/>
                        <Route
                            path ='/'
                            element = {
                                isLogined ? (
                                    <>
                                        <Header email={email}/>
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
                                        <EditTask />
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
