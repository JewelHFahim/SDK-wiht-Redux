import React from 'react';
import SectionTitle from '../../Utilities/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { decode as base64_decode, encode as base64_encode } from 'base-64';
import { useSendSingleMailMutation } from '../../features/email/emailApi';
import TextEditor from '../TextEditor/TextEditor';


const SendMailSingle = () => {

    const { register, handleSubmit } = useForm();
    const [content, setContent] = useState('');
    const [sendSingleMail] = useSendSingleMailMutation();



    const handleSubmit1 = (data) => {

        let encoded = base64_encode(content);

        try {
            const allData = {
                subject: data.subject,
                message: encoded,
                reciever_mail: data.reciever_mail,
            }

            console.log(allData);
            // sendSingleMail(allData);

        } catch (error) {
            console.log(error)
        }

    };


    return (
        <div className='sendmail-cont'>

            <SectionTitle>Send Single Mail</SectionTitle>

            <div className='sendmail-box'>
                <form onSubmit={handleSubmit(handleSubmit1)}>

                    <div className='subject'>
                        <h3>Subject:</h3>
                        <input type="text" {...register("subject")} placeholder='Subject Name...' />
                    </div>

                    <div className='message'>
                        <h3>Message:</h3>
                        <TextEditor content={content} setContent={setContent} />
                    </div>

                    <div className='addmail'>
                        <h3>Add Mail ID:</h3>
                        <input type="text" {...register("reciever_mail")} placeholder='Mail ID' />
                    </div>

                    <div className='send-mail-btn'>
                        <button type='submit'>Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SendMailSingle;