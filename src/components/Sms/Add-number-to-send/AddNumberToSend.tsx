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

    const onHandleAddNumberToSend = (e: ChangeEvent<HTMLInputElement>, sms: string, id: string) => {
        if(e.target.checked) {
            phonesToSend.push({phone: sms, id: id})
            setPhones(phonesToSend)
        } else {
            const filter = phonesToSend.filter(phone => phone.id !== id)
            setPhonesToSend(filter);
            setPhones(filter);
            if(filter.length === 0){
                setPhones({
                    id: '',
                    phone: ''
                });
            }

        }
    }


    return (
        <>
            {smsBase
              .sort((a:any, b:any) => a.company > b.company ? 1 : -1,)
              .map((sms: any) => (
                <div
                    className="addNumberToSend"
                    key={sms.id}
                >
                    <label
                        className="addNumberToSend--paragraf"
                        htmlFor={sms.id}
                    > {sms.company} - {sms.surname} - {sms.name} - {sms.position} - {sms.phone}
                    </label>
                    <input
                        type="checkbox"
                        className="addNumberToSend--checkbox"
                        name="add-number"
                        id={sms.id}
                        value="add-number"
                        onChange={(e) => onHandleAddNumberToSend(e, sms.phone, sms.id)}
                    />
                </div>
            ))}

        </>
    )
}