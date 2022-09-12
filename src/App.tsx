import React, {useEffect, useState} from 'react';

import {Header} from './components/layout/Header';
import {Tasks} from './components/Tasks/Tasks';
import {SearchContext} from './context/search.context';
import {LoadingContext} from './context/loading.context';
import {Routes, Route} from 'react-router-dom';
import {EditTask} from "./components/Tasks/Edit/EditTask";
import {Login} from './components/Login/Login';
import {Register} from "./components/Register/Register";
import {ErrorPage} from "./components/Error/ErrorPage";
import {MessageComponent} from "./components/Messages/MessageComponent";
import {Home} from "./components/Home/Home";
import {SmsForm} from "./components/Sms/SmsForm";
import {AddNumber} from "./components/Sms/Add/AddNumber";
import {UserContext} from "./context/message.context";
import {PhonesContext} from './context/phones.context';
import {NumbersList} from './components/Numbers/Numbers-list';
import {getAxiosData} from './components/Axios-api/Axios.api';
import {Edit} from "./components/Numbers/Edit/Edit";
import {GroupsContext} from './context/groups.context';
import { Sent } from './components/Sms/Sent/Sent';

export const App = () => {
    const [search, setSearch] = useState('');
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);
    const [phones, setPhones] = useState({
      id: '',
      phone: '',
    });
    const [groups, setGroups] = useState({
        id: '',
        group: '',
    });
    const [{isLogined, email, roles}, setIsLogined] = useState({
        isLogined: false,
        email: '',
        roles: '',
    });

    useEffect(() => {
        (async () => {
            const response = await getAxiosData({
                url: "/auth/check",
                method: "GET",
            });

            if (response.ok) {
                setIsLogined({
                    isLogined: response.ok,
                    email: response.email,
                    roles: response.roles,
                });
            }
            setUser(email)
            setLoading(false);
        })();
    }, [loading, search, email])

    return (
        <>
            <SearchContext.Provider value={{search, setSearch}}>
                <LoadingContext.Provider value={{loading, setLoading}}>
                    <UserContext.Provider value={{user, setUser}}>
                        <PhonesContext.Provider value={{phones, setPhones}}>
                            <GroupsContext.Provider value={{groups, setGroups}}>
                                <Routes>
                                    <Route path="/*" element={<ErrorPage/>}/>
                                    <Route path="/register" element={<Register/>}/>
                                    <Route
                                        path='/'
                                        element={
                                            isLogined ? (
                                                <>
                                                    <Header setIsLogined={{setIsLogined, email, roles}}/>
                                                    <Home setIsLogined={setIsLogined}/>
                                                </>
                                            ) : (
                                                <Login setIsLogined={setIsLogined}/>
                                            )
                                        }
                                    >
                                    </Route>

                                    {(roles === 'admin') ? (<Route
                                        path='/todo'
                                        element={
                                            isLogined ? (
                                                <>
                                                    <Header setIsLogined={{setIsLogined, email, roles}}/>
                                                    <Tasks setIsLogined={setIsLogined}/>
                                                </>
                                            ) : (
                                                <Login setIsLogined={setIsLogined}/>
                                            )
                                        }
                                    >
                                    </Route>) : null}
                                    <Route
                                        path='/edit/:id'
                                        element={
                                            isLogined ? (
                                                <>
                                                    <Header setIsLogined={{setIsLogined, email, roles}}/>
                                                    <EditTask setIsLogined={email}/>
                                                </>
                                            ) : (
                                                <Login setIsLogined={setIsLogined}/>
                                            )
                                        }
                                    >
                                    </Route>
                                    <Route
                                        path='/chat'
                                        element={
                                            isLogined ? (
                                                <>
                                                    <Header setIsLogined={{setIsLogined, email, roles}}/>
                                                    <MessageComponent email={email}/>
                                                </>
                                            ) : (
                                                <Login setIsLogined={setIsLogined}/>
                                            )
                                        }
                                    >
                                    </Route>
                                    <Route
                                        path='/numbers-list'
                                        element={
                                            isLogined ? (
                                                <>
                                                    <Header setIsLogined={{setIsLogined, email, roles}}/>
                                                    <NumbersList setIsLogined={roles}/>
                                                </>
                                            ) : (
                                                <Login setIsLogined={setIsLogined}/>
                                            )
                                        }
                                    >
                                    </Route>
                                    <Route
                                        path='/numbers-list/edit/:id'
                                        element={
                                            isLogined ? (
                                                <>
                                                    <Header setIsLogined={{setIsLogined, email, roles}}/>
                                                    <Edit/>
                                                </>
                                            ) : (
                                                <Login setIsLogined={setIsLogined}/>
                                            )
                                        }
                                    >
                                    </Route>

                                    <Route
                                        path='/sms'
                                        element={
                                            isLogined ? (
                                                <>
                                                    <Header setIsLogined={{setIsLogined, email, roles}}/>
                                                    <SmsForm/>
                                                </>
                                            ) : (
                                                <Login setIsLogined={setIsLogined}/>
                                            )
                                        }
                                    >
                                    </Route>
                                    <Route
                                        path='/sms/add-number-to-send'
                                        element={
                                            isLogined ? (
                                                <>
                                                    <Header setIsLogined={{setIsLogined, email, roles}}/>

                                                </>
                                            ) : (
                                                <Login setIsLogined={setIsLogined}/>
                                            )
                                        }
                                    >
                                    </Route>
                                    <Route
                                        path='/sms/add'
                                        element={
                                            isLogined ? (
                                                <>
                                                    <Header setIsLogined={{setIsLogined, email, roles}}/>
                                                    <AddNumber/>
                                                </>
                                            ) : (
                                                <Login setIsLogined={setIsLogined}/>
                                            )
                                        }
                                    >
                                    </Route>
                                  <Route
                                    path='/sent'
                                    element={
                                      isLogined ? (
                                        <>
                                          <Header setIsLogined={{setIsLogined, email, roles}}/>
                                          <Sent/>
                                        </>
                                      ) : (
                                        <Login setIsLogined={setIsLogined}/>
                                      )
                                    }
                                  >
                                  </Route>

                                </Routes>
                            </GroupsContext.Provider>
                        </PhonesContext.Provider>
                    </UserContext.Provider>
                </LoadingContext.Provider>
            </SearchContext.Provider>
        </>
    );
}
