import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEdit } from 'react-icons/fa';
import { AiOutlineMinus } from 'react-icons/ai';
import trash2 from "../../Assets/Trash Box 2.svg";
import "./EmailEdit.css";
import { useAddEmailMutation, useDeleteEmailMutation, useEmailsQuery, useGroupsQuery } from '../../features/email/emailApi';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createFilter } from 'react-search-input';

const KEYS_TO_FILTERS = ['email'];


const EmailEdit = ({searchUpdated, searchTerm}) => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();

    const { data: emailList, isLoading, error, isFetching } = useEmailsQuery();
    const { data: groupList } = useGroupsQuery();
    const [deleteEmail] = useDeleteEmailMutation();
    const [addEmail] = useAddEmailMutation();


    const [open, setOpen] = useState(true);


    const onSubmit = async (data, e) => {
        e.preventDefault();
        const user = {
            email: data.email,
            group: [data.group]
        }
        addEmail(user);
        navigate("/email-list");
        toast.success("Email Added Successfully");
    };


    const handleDelete = async (email) => {
            dispatch(deleteEmail(email));
            toast.success("Email Deleted Successfully");
    };

    const filteredEmails = emailList.filter(createFilter(searchTerm, KEYS_TO_FILTERS));


    return (
        <div className='grid justify-center'>
            {isLoading && <p>Loading...</p>}
            {error && <p>Something went wrong</p>}
            {isFetching && <p>Fetching Data</p>}


            {emailList && emailList.map(gl =>

                <div className="dropdown">
                    <div className='drop-head-content'>
                        <div className='drop-head-body'>
                            <h1> <span className='text-[#5E5E5E] lg:hidden'>No.</span> {gl.id}</h1>
                            <h1><span className='text-[#5E5E5E] lg:hidden'>Mail: <br /></span> {gl.email}</h1>
                            <h1> <span className='text-[#5E5E5E] lg:hidden'>Group: <br /></span> {gl.group}</h1>
                        </div>

                        {
                            open ?
                                <label onBlur={() => setOpen(false)} tabIndex={0} className='editBtn' >  < AiOutlineMinus /></label>
                                :
                                <label onBlur={() => setOpen(true)} tabIndex={0} className='editBtn'> <FaEdit /></label>
                        }

                        <button onClick={() => handleDelete(gl.email)} className='mr-5 trash-btn'>
                            <img src={trash2} alt="" />
                        </button>
                    </div>


                    <div className='flex justify-center'>
                        <ul tabIndex={0} className="dropdown-content dropdown-one p-2 shadow bg-base-100 rounded-box w-[100%] h-[200px] mx-auto">
                            <form onSubmit={handleSubmit(onSubmit)} className='w-full h-full relative'>

                                <div className="dropdown-content">
                                    <div>
                                        <h1>Email:</h1>
                                        <input type="text" {...register("email")} placeholder={`email`} />
                                    </div>

                                    <div className="mt-5 lg:mt-0">
                                        <h1>Group:</h1>
                                        <select {...register("group")} className="select-option">
                                            <option disabled selected>Group Name One</option>
                                            {groupList && groupList.map(gl =>
                                                <option> {gl.title} </option>
                                            )}
                                        </select>
                                    </div>
                                </div>

                                <div className="email-save-btn flex justify-end absolute right-0 bottom-0">
                                    <button type="submit">SAVE</button>
                                </div>

                            </form>
                        </ul>
                    </div>

                </div>
            )}
        </div>
    );
};

export default EmailEdit;