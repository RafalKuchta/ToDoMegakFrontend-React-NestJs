import React, {ChangeEvent, useContext, useState} from 'react';
import './AddNumberToSend.css'
import {PhonesContext} from "../../../context/phones.context";

export interface PhonesToSend {
    id: string,
    phone: string,
}

export const AddNumberToSend = ({smsBase}: any) => {
    const {phones, setPhones} = useContext(PhonesContext);
    const [phonesToSend, setPhonesToSend] = useState<PhonesToSend[]>([]);

    let ar: PhonesToSend[]= [];

    const onHandleAddNumberToSend = (e: ChangeEvent<HTMLInputElement>, sms: string, id: string) => {
        if(e.target.checked) {
            ar.push({phone: sms, id: id});
            setPhonesToSend(phonesToSend => phonesToSend.concat(ar));
            setPhones(phonesToSend)
        } else {
            setPhonesToSend(phonesToSend => phonesToSend.filter(phone => phone.id !== id))
        }

        console.log(phonesToSend)
    }

    return (
        <>
            <h4>Wybierz numery:</h4>

            {smsBase.map((sms: any) => (
                <div
                    className="addNumberToSend"
                    key={sms.id}
                >
                    <div
                        className="addNumberToSend--paragraf">{sms.phone}</div>
                    <input
                        type="checkbox"
                        className="addNumberToSend--checkbox"
                        name="add-number"
                        value="add-number"
                        onChange={(e) => onHandleAddNumberToSend(e, sms.phone, sms.id)}
                    />
                </div>
            ))}

            {/*<div>*/}
            {/*    <h4>Sms'a wyślesz do: </h4>*/}
            {/*    {*/}
            {/*        phonesToSend.map(phones => <p key={phones.id}>{phones.phone}</p>)*/}
            {/*    }*/}
            {/*</div>*/}
        </>
    )
}