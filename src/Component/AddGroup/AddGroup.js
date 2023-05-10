import React from 'react';
import "./AddGroup.css";
import SectionTitle from '../../Utilities/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddGroup = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        const user = {
            title: data.title,
        }
        fetch("http://192.168.50.246/email/create-group/", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                toast.success('Group Added Successfully!');
                navigate("/group-list");
                console.log(data)
            });
    }

    return (
        <div className='add-group'>

            <SectionTitle>Add Group </SectionTitle>

            <div className='add-group-box'>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className=' lg:flex justify-center gap-[35px]'>
                            <div className='mb-[20px] lg:mb-0'>
                                <h2 className='text-[20px] lg:text-[25px] font-[600] ml-[20px]'>Group Name:</h2>
                                <div className='group-name-id'>
                                    <input type="text" {...register("title")} placeholder='Group Name' />
                                </div>
                            </div>

                            <div>
                                <h2 className='text-[20px] lg:text-[25px] ml-[20px]'>Group ID:</h2>
                                <div className='group-name-id'>
                                    <input type="text" disabled placeholder='ID01' />
                                </div>
                            </div>
                        </div>


                        <div className='agb-btn flex justify-end lg:mr-10'>
                            <button type='submit'>SAVE</button>
                        </div>

                    </form>
                </div>

                <div className=' lg:flex gap-[210px] lg:ml-[134px] mt-[22px] lg:mt-[44px] text-[20px] lg:text-[30px] font-[700] text-black opacity-[40%]'>
                    <p>No.</p>
                    <p>Email ID</p>
                </div>

                <div className='addNewGroup-search'>
                    <input type="text" placeholder='Mail ID' />
                </div>

                <div className='add-mail-cvs-btn'>
                    <button>Add New Mail</button>
                    <button>Import CVS</button>
                </div>

            </div>

        </div>
    );
};

export default AddGroup;