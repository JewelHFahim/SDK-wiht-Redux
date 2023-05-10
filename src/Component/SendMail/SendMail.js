import React, { useContext } from 'react';
import "./SendMail.css";
import SectionTitle from '../../Utilities/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
// import { UserContext } from '../../Context/AuthContext';
import { decode as base64_decode, encode as base64_encode } from 'base-64';
import TyniMCE from "../TyniMCE/TyniMCE";
import { useGroupsQuery, useSendBulkMailMutation } from '../../features/email/emailApi';


const SendMail = () => {

    const { register, handleSubmit } = useForm();
    const [tynimce, setTynimce] = useState();
    const { data: groupList } = useGroupsQuery();
    const [sendBulkMail] = useSendBulkMailMutation();


    const handleSubmit1 = (data) => {
        let encoded = base64_encode(tynimce);

        try {
            const allData = {
                subject: data.subject,
                message: encoded,
                group: data.group
            }
            console.log(allData);
            sendBulkMail(allData);
        }
        catch (err) {
            console.log(err, 'error message')
        }
    };


    return (
        <div className='sendmail-cont'>

            <SectionTitle>Send Bulk Mail</SectionTitle>

            <div className='sendmail-box'>
                <form onSubmit={handleSubmit(handleSubmit1)}>

                    <div className='subject'>
                        <h3>Subject:</h3>
                        <input type="text" {...register("subject")} placeholder='Subject Name...' />
                    </div>

                    <div className='message'>
                        <h3>Message:</h3>
                        <div>
                            {/* <TyniMCE setTynimce={setTynimce} /> */}
                        </div>
                    </div>

                    <div className='groupnam'>
                        <h3>Add Group Name:</h3>
                        <select  {...register("group")} className="select-option">
                            <option disabled selected> Group Name One </option>
                            {
                                groupList && groupList.map(gl =>
                                    <option onClick={() => handleSubmit1(gl.id)} value={gl.id}>{gl.title}</option>
                                )
                            }
                        </select>
                    </div>
                    <div className='send-mail-btn'>
                        <button type='submit'>Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SendMail;