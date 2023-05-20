import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { AiOutlineMinus } from 'react-icons/ai';
import trash2 from "../../Assets/Trash Box 2.svg";
import "./EmailEdit.css";
import { toast } from 'react-hot-toast';
import SearchInput, { createFilter } from 'react-search-input';
import { useAddEmailMutation, useDeleteEmailMutation, useEmailsQuery, useGroupsQuery } from '../../features/email/emailApi';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const KEYS_TO_FILTERS = ['email'];


const EmailEdit = ({ searchUpdated, searchTerm }) => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const { data: emailList } = useEmailsQuery();
    const { data: groupList } = useGroupsQuery();
    const [deleteEmail] = useDeleteEmailMutation();
    const [addEmail] = useAddEmailMutation();

console.log(emailList, "emailList")
    const [open, setOpen] = useState(true);
    // const [searchTerm, setSearchTerm] = useState('');


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
        await deleteEmail(email);
        toast.success("Deleted");
    }


    const filteredEmails = emailList && emailList.filter(createFilter(searchTerm, KEYS_TO_FILTERS));
    console.log(filteredEmails, "filteredEmails")

    return (
        <div>

            <div className="hidden mt-[30px] lg:grid grid-cols-3 justify-center ml-24 text-[20px] font-bold">
                <p>ID</p>
                <p>MAIL</p>
                <p className='ml-6'>GROUP</p>
            </div>


            { filteredEmails && filteredEmails.map(gl => {

                return (
                    <div className='grid grid-cols-1 justify-center w-full'>

                        <div key={gl.id} className="dropdown drop-main w-full">

                            <div className='drop-head-content  w-full'>
                                <div className='drop-head-body'>
                                    <h1> <span className='text-[#5E5E5E] lg:hidden'>No.</span> {gl.id}</h1>
                                    <h1><span className='text-[#5E5E5E] lg:hidden'>Mail: <br /></span> {gl.email}</h1>
                                    <h1> <span className='text-[#5E5E5E] lg:hidden'>Group: <br /></span> {gl.group}</h1>
                                </div>

                                <div className=''>
                                    {
                                        open ?
                                            <label onBlur={() => setOpen(false)} tabIndex={0} className='editBtn' >  < AiOutlineMinus /></label>
                                            :
                                            <label onBlur={() => setOpen(true)} tabIndex={0} className='editBtn'> <FaEdit /></label>
                                    }
                                </div>

                                <button onClick={() => handleDelete(gl.email)} className='mr-4 trash-btn'>
                                    <img src={trash2} alt="" />
                                </button>
                            </div>


                            <div className='flex justify-center'>
                                <ul tabIndex={0} className="dropdown-content dropdown-one p-2 shadow bg-base-100 rounded-box w-[100%] h-[200px] mx-auto">
                                    <div className='w-full h-full'>

                                        <div className="dropdown-content w-full mt-4">
                                            <form  onSubmit={handleSubmit(onSubmit)} className='grid justify-center grid-cols-1 lg:grid-cols-2 gap-5 w-full px-8'>

                                                <div>
                                                    <h1>Email:</h1>
                                                    <input
                                                        type="text"
                                                        name="email"
                                                        defaultValue={gl.email}
                                                        {...register("email")}
                                                    />
                                                </div>

                                                <div className="mt-3 lg:mt-0">
                                                    <h1>Group:</h1>
                                                    <select name='group' {...register("group")} className="select-option">
                                                        <option disabled selected>Group Name One</option>
                                                        {groupList && groupList.map(gl =>
                                                            <option value={gl.id}> {gl.title} </option>
                                                        )}
                                                    </select>
                                                </div>

                                                <div className="email-save-btn flex justify-end absolute right-[70px] top-[180px] lg:top-[120px]">
                                                    <button type="submit">SAVE</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }
            )}
        </div>
    );
};

export default EmailEdit;