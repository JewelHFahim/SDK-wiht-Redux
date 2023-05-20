import React from 'react';
import "./AddMail.css";
import SectionTitle from '../../Utilities/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useAddEmailMutation, useGroupsQuery } from '../../features/email/emailApi';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const AddMail = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [csv, setCsv] = useState();


    const [addMail] = useAddEmailMutation();
    const { data: group } = useGroupsQuery();


    const onSubmit = (data, e) => {
        const form = e.target;


        const user = {
            email: data.email,
            group: [data.group]
        }

        try {
            addMail(user);
            console.log(data.status, "status");
            toast.success('Email Added Successfully!');
            form.reset();
            navigate("/email-list");
        } catch (error) {
            console.log(error)
        }
    }

    const handleCVS = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append("csv_file", csv);
        // console.log(e.target.files[0])

        try {
            const result = await axios.post(`http://192.168.50.101:81/email/csv-upload/`, formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );
            console.log(result);
            if (result) {
                toast.success('File Uploaded');
                navigate("/email-list");
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className='add-email'>

            <div>
                <SectionTitle>Add Email</SectionTitle>

                <form onSubmit={handleCVS} className='flex lg:justify-end items-center gap-5 mt-2'>
                    <input type="file" onChange={(e) => setCsv(e.target.files[0])} className="pt-1" />
                    <button type='submit' className='bg-[#7C81EC] px-2 lg:px-5 py-1 lg:text-[20px] font-semibold shadow-xl text-white rounded-[43px]'>Import CVS</button>
                </form>
            </div>

            <div className='add-email-box'>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='add-email-sub-box'>
                        <div>
                            <h2>Email:</h2>
                            <div className=''>
                                <input type="text" {...register("email")} placeholder='youremail@gmail.com' className='add-email-box-cont' />
                            </div>
                        </div>

                        <div>
                            <h2>Group:</h2>
                            <select className="select adde-select" {...register("group")}>
                                <option disabled selected>Select Group Name</option>
                                {
                                    group && group?.map(grp => <option value={grp.id}>{grp.title}</option>)
                                }
                            </select>
                        </div>
                    </div>

                    <div className='ade-save mt-10'>
                        <button>SAVE</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddMail;