import React from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import logo from "../Assets/sitedocker-logo.png";
import { NavLink } from 'react-router-dom';


const Sidebar = ({ isOpen, toggleDrawer }) => {

const active = 'bg-primary text-white rounded-3xl pl-2 shadow-lg mr-5'
    return (
        <>
            <div className=''>
                <Drawer
                    open={isOpen}
                    onClose={toggleDrawer}
                    direction='left'
                    className=''
                    size='350px'
                >

                    <div className='w-[260px] h-[100px] mx-auto py-4'>
                       <NavLink to="/"> <img src={logo} alt="" /></NavLink>
                    </div>

                    <div className='h-full'>
                        <ul className=" flex flex-col justify-between w-[260px] mx-auto  h-[85vh]">

                            <div className='text-[35px] flex flex-col gap-4 mt-8'>
                                <NavLink to="/" className={({ isActive }) => (isActive ? active : 'inactive')}><li> <a>User Profile</a></li></NavLink>

                                <NavLink to="/email-list" className={({ isActive }) => (isActive ? active : 'inactive')}><li><a>Email List</a></li></NavLink>

                                <NavLink to="/group-list" className={({ isActive }) => (isActive ? active : 'inactive')} ><li><a>Group List</a></li></NavLink>

                                <NavLink to="/add-mail" className={({ isActive }) => (isActive ? active : 'inactive')}><li><a>Add Mail</a></li></NavLink>

                                <NavLink to="/add-group" className={({ isActive }) => (isActive ? active : 'inactive')} ><li><a>Add Group</a></li></NavLink>

                                <NavLink to="/send-mail-single" className={({ isActive }) => (isActive ? active : 'inactive')}><li><a>Single Mail</a></li></NavLink>

                                <NavLink to="/send-mail-bulk" className={({ isActive }) => (isActive ? active : 'inactive')}><li><a>Bulk Mail</a></li></NavLink>
                            </div>

                            <div className='flex items-center gap-[22px]'>
                                <div className='w-[58px] h-[58px] rounded-full bg-[#EA9797]'></div>
                                <div>
                                    <p className='text-[25px] font-[900]'>User Name</p>
                                    <button className='text-[25px] text-[#7C81EC]'>Log Out</button>
                                </div>
                            </div>

                        </ul>
                    </div>
                </Drawer>
            </div>


        </>
    )
}

export default Sidebar;