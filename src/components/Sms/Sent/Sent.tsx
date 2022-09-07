import React, {useContext, useEffect, useState} from 'react';

import './Sent.css';

import {ToastContainer} from "react-toastify";
import {LoadingContext} from "../../../context/loading.context";
import {getFetchDataId} from "../../Fetch-api/Fetch-api";

interface SmsEntity {
  id: string;
  name: string;
  surname: string;
  phone: string;
  position: string;
  group?: string;
  sms: string;
  created_at: string;
}

export const Sent = ({setIsLogined}: any) => {
  const {loading, setLoading} = useContext(LoadingContext);
  const [smsSent, setSmsSent] = useState<SmsEntity[]>([]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    (async () => {
      const res = await getFetchDataId({
        url: '/sms/sms-sent/123',
        method: 'GET',
        id: '123',
      })
      const response = await res.json();
      setSmsSent(response);
    })();
    setLoading(false);
  }, [loading]);


  return (
    <>
      <h2>Lista wysłanych SMS'ów</h2>
      <div className="list-numbers">
        <ToastContainer autoClose={5000}/>
        <table>
          <thead>
            <tr>
              <th>Data wysłania</th>
              <th>Nazwisko</th>
              <th>Imię</th>
              <th>Firma / Lokalizacja</th>
              <th>Numer</th>
              <th>Grupa</th>
              <th>Wiadomość</th>
            </tr>
          </thead>
          {smsSent
            .sort((a: any, b: any) => a.created_at > b.created_at ? -1 : 1)
            .map((sms: any, i) => (
              <tbody key={i}>
                <tr
                >
                  <td>{sms.created_at}</td>
                  <td>{sms.surname ? sms.surname : "Brak"}</td>
                  <td>{sms.name ? sms.name : "Brak"}</td>
                  <td>{sms.company ? sms.company : "Brak"}</td>
                  <td>{sms.phone}</td>
                  <td>{sms.group ? sms.group : "Brak"}</td>
                  <td>{sms.sms}</td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
    </>
  )
}