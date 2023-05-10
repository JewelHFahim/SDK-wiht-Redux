import React from 'react';
import "./UserProfile.css";
import { RiImageAddFill } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';
import UserProfileEdit from './UserProfileEdit';
import SectionTitle from '../../Utilities/SectionTitle/SectionTitle';


const UserProfile = () => {
    return (
        <div className='userprofile'>

            <SectionTitle>User Profile</SectionTitle>

            <div className='userprofile-box border shadow-lg'>

                <div className='profile-content'>
                    <h3>NAME: <span>USER NAME</span> </h3>
                    <h3>Mail ID: <span>username@gmail.com</span> </h3>
                    <h3>PASSWORD: <span>*******</span> </h3>
                </div>

                <div className='profilepic relative'>
                    <RiImageAddFill className='absolute text-[76px] bottom-2 right-2' />
                </div>

                <label htmlFor="my-modal-3" className='profile-edit-btn'>
                    <FaEdit className='text-[26px] lg:text-[60px] text-white' />
                </label>


            </div>
            <UserProfileEdit />
        </div>
    );
};

export default UserProfile;