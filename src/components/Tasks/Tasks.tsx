import React, {useContext, useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faPenToSquare, faTrashCan, faArrowUp} from "@fortawesome/free-solid-svg-icons";
import {SearchContext} from "../../context/search.context";
import {Link} from "react-router-dom";

import {LoadingContext} from "../../context/loading.context";
import {TodoEntity} from 'types';
import './Tasks.css';
import {apiUrl} from "../../config/api";


export const Tasks = ({setIsLogined}:any) => {
    const {search, setSearch} = useContext(SearchContext);
    const {loading, setLoading} = useContext(LoadingContext);
    const [todos, setTodos] = useState<TodoEntity[]>([]);
    const [done, setDone] = useState<TodoEntity[]>([]);

    useEffect(() => {
        (async () => {
            const res = await fetch('http://localhost:3001/todo/search/');
            const data = await res.json();

            console.log(data)

            if(data.statusCode === 401) {
                setIsLogined(false)
            }

            const todo = data.filter((to: any) => !to.completed)
            setTodos(todo);

            const done = data.filter((d: any) => d.completed)
            setDone(done);

            setLoading(false);

        })();
    }, [loading, search]);


    const deleteTask = (id: string) => {
        setLoading(true);
        (async () => {
            await fetch(`${apiUrl}/todo/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id,
                })
            });
        })();

    };


    const doneTask = (id: string) => {
        setLoading(true);
        (async () => {
            await fetch(`${apiUrl}/todo/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id,
                    completed: true,
                }),
            });
        })();
    };

    const backTask = (id: string) => {
        setLoading(true);
        (async () => {
            await fetch(`${apiUrl}/todo/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id,
                    completed: false,
                }),
            });
        })();
    };


    return (
        <>
            <h2>Zadania do zrobienia</h2>
            {
                todos.map(todo => (
                    <div key={todo.id} className="wrapper-to-do">
                        <div className="tasks-to-do">
                            <div className="task-to-do">{todo.name}</div>
                            <div className="icons-to-do">
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    size="xs"
                                    className="icon-done"
                                    onClick={() => doneTask(todo.id)}
                                />

                                <Link to={`/edit/${todo.id}`} id={todo.id}>
                                    <FontAwesomeIcon
                                    icon={faPenToSquare}
                                    className="icon-edit"
                                />
                                </Link>

                                <FontAwesomeIcon
                                    icon={faTrashCan}
                                    className="icon-trash"
                                    onClick={() => deleteTask(todo.id)}
                                />
                            </div>
                        </div>
                    </div>
                ))
            }

            <h2>Zadania zrobione</h2>

            {
                done.map(don => (
                    <div key={don.id} className="wrapper-to-do">
                        <div className="tasks-to-do">
                            <div className="task-to-do">{don.name}</div>
                            <div className="icons-to-do">
                                <FontAwesomeIcon
                                    icon={faArrowUp}
                                    className="icon-edit"
                                    onClick={() => backTask(don.id)}
                                />
                                <FontAwesomeIcon
                                    icon={faTrashCan}
                                    className="icon-trash"
                                    onClick={() => deleteTask(don.id)}
                                />
                            </div>
                        </div>
                    </div>
                ))
            }

        </>


    )
}