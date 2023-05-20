import React from 'react';
import { useForm } from 'react-hook-form';
import { FaEdit } from 'react-icons/fa';
import trash2 from "../../Assets/Trash Box 2.svg";
import "./GroupList.css";
import { BiSearchAlt } from 'react-icons/bi';
import { RiArrowDownSLine } from 'react-icons/ri';
import SectionTitle from '../../Utilities/SectionTitle/SectionTitle';
import { useDeleteEmailMutation, useEmailsQuery, useGroupsQuery } from '../../features/email/emailApi';
import { toast } from 'react-hot-toast';


const GroupList = () => {
  const { data: groupList } = useGroupsQuery();

  const { data: emailList } = useEmailsQuery();

  const [deleteEmail] = useDeleteEmailMutation();

  const { register, handleSubmit } = useForm();


  const onSubmit = (data) => {
    const user = {
      email: data.email,
      group: [data.group]
    }
    //edit group option, was not build. lack of api
    //thiis section is idle now.
  }

  const handleDelete = async (email) => {
    deleteEmail(email);
    toast.success("Email Deleted Successfully");
  };



  return (
    <div className=''>

      <SectionTitle> Group List </SectionTitle>

      <div className="flex justify-center">
        <div className="email-list-header-one">
          <div className="flex items-center gap-[10px] lg:gap-[24px] w-full">
            <input type="text" placeholder="Email ID, Group Name" />
            <BiSearchAlt className="text-[38px]" />
          </div>

          <div className="all-new-id-cont">

            <div className="flex items-center gap-[10px]">
              <p className="text-[15px] lg:text-[25px] font-[600]">Status:</p>
              <div className="el-status-box">
                <p>ALL</p>
                <RiArrowDownSLine className="text-[20px] lg:text-[35px]" />
              </div>
            </div>

            <div className="el-add-new-group">
              <p>Add New ID </p>
              <RiArrowDownSLine className="text-[20px] lg:text-[35px]" />
            </div>
          </div>
        </div>
      </div>

      {groupList && groupList?.map(gl =>

        <div className="dropdown">

          <div className='drop-head-content-gl'>

            <div className='drop-head-body-gl '>
              <h1> <span className='text-[#5E5E5E] lg:hidden'>ID.</span> {gl.id}</h1>
              <h1><span className='text-[#5E5E5E] lg:hidden'><br />Group Name: <br /></span> {gl.title} </h1>
              <h1> <span className='text-[#5E5E5E] lg:hidden'><br />Total Mail: <br /> </span> 4000 Mail</h1>
            </div>

            <label tabIndex={0} className='editBtn-gl' ><FaEdit /></label>

            <button className='mr-5 trash-btn-gl'>
              <img src={trash2} alt="" />
            </button>
          </div>


          <div className='flex justify-center'>
            <ul tabIndex={0} className="dropdown-content dropdown-three p-2 shadow bg-base-100 rounded-box mx-auto">
              {
                emailList && emailList.map(eml =>

                  <form onSubmit={handleSubmit(onSubmit)} className='w-full h-full relative'>
                    <div className="x dropdown-four">
                      <p>{eml.id}</p>
                      <p>{eml.email}</p>

                      <button onClick={() => handleDelete(eml.email)} className=''>
                        <img src={trash2} className='w-5 h-5 lg:w-10 lg:h-10' alt="" />
                      </button>
                    </div>

                  </form>
                )}
            </ul>
          </div>

        </div>
      )}

    </div>
  );
};

export default GroupList;