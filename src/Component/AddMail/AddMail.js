import React, { useEffect, useState } from 'react';
import "./AddMail.css";
import SectionTitle from '../../Utilities/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useAddEmailMutation, useGroupsQuery } from '../../features/email/emailApi';

const AddMail = () => {

    const { register, handleSubmit } = useForm();
    const navigate = useState();

    const [addMail] = useAddEmailMutation();
    const { data: group, isLoading, error, isFetching } = useGroupsQuery();





    const onSubmit = (data) => {

        const user = {
            email: data.email,
            group: [data.group]
        }

        addMail(user);

        toast.success('Email Added Successfully!');
        navigate("/email-list");
        console.log(data)

    }

    return (
        <div className='add-email'>

            <SectionTitle>Add Email</SectionTitle>

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
                                    group.map(grp => <option value={grp.id}>{grp.title}</option>)
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