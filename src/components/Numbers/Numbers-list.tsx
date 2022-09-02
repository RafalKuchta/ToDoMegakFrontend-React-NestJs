import React, { useContext, useEffect, useState} from 'react';
import {LoadingContext} from "../../context/loading.context";

import './Numbers-list.css';
import {getAxiosData} from "../Axios-api/Axios.api";
import {useNavigate} from "react-router";
import {toast, ToastContainer} from "react-toastify";

interface NumbersEntity {
    id: string;
    name: string;
    surname: string;
    phone: string;
    position: string;
    groups?: {
        id: string,
        name: string,
    };
}

export const NumbersList = ({setIsLogined}: any) => {
    const {loading, setLoading} = useContext(LoadingContext);
    const [numbers, setNumbers] = useState<NumbersEntity[]>([]);

    useEffect(() => {
        (async () => {
            const response = await getAxiosData({
                url: "/sms/get-all",
                method: "GET",
            });
            setNumbers(response);
        })();
        setLoading(false);
    }, [loading]);

    const navigate = useNavigate();

    const onChangeEdit = (e: any, id: string) => {
      if(setIsLogined !== 'admin') {
        toast.error('Dostęp ma tylko admin!', {
          position: toast.POSITION.TOP_RIGHT,
          className: 'foo-bar'
        });
      } else {
        navigate(`/numbers-list/edit/${id}`);
      }

    }

    return (
        <>
            <h2>Lista numerów w bazie</h2>
            <div className="list-numbers">
              <ToastContainer autoClose={5000}/>
                <table>
                    <tr>
                        <th>Imię</th>
                        <th>Nazwisko</th>
                        <th>Stanowisko</th>
                        <th>Firma / Lokalizacja</th>
                        <th>Numer</th>
                        <th>Grupa</th>
                    </tr>
                    {numbers
                        .sort((a: any, b: any) => a.surname > b.surname ? 1 : -1)
                        .map((number: any) => (
                            <tr
                                key={number.id}
                                onClick={() => onChangeEdit((e: any) => e.target.value, number.id)}
                            >
                                <td>{number.surname}</td>
                                <td>{number.name}</td>
                                <td>{number.position}</td>
                                <td>{number.company}</td>
                                <td>{number.phone}</td>
                                <td>{number.groups ? number.groups.name : "Brak"}</td>
                            </tr>
                        ))}
                </table>
            </div>
        </>
    )
}