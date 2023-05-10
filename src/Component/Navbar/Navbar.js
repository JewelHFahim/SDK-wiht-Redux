import React from 'react';
import "./Navbar.css";
import { BiSearchAlt } from 'react-icons/bi';
import { MdNotificationsNone } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../Assets/sitedocker-logo.png";
import { AiOutlineMenu } from 'react-icons/ai';



const Navbar = ({ toggleDrawer, isOpen }) => {

    return (
        <div className={` nav w-screen h-[100px] lg:h-[112px] flex justify-between items-center px-2 ${isOpen ? "pl-[360px] pr-[50px]" : "px-[50px]"} `}>
            <div className='w-[60%] lg:hidden' >
                <NavLink to="/"><img src={logo} className='' alt="" /></NavLink>
            </div>

            <div className='text-center text-2xl hidden lg:block'>
                <button onClick={toggleDrawer}><AiOutlineMenu /></button>
            </div>


            <div className='flex items-center gap-[36px]'>
                <input type="text" placeholder='Search...' className='w-[530px] h-[60px] rounded-[43px] focus:outline-none bg-white pl-10 text-[20px] hidden lg:block' />

                <BiSearchAlt className='text-[66px] hidden lg:block' />

                <Link to="/notification">
                    <button>
                        <MdNotificationsNone className='text-[66px]' />
                    </button>
                </Link>
            </div>

            <div className='lg:flex items-center gap-[22px] hidden '>
                <div className='text-right'>
                    <p className='text-[25px] font-[900]'>User Name</p>
                    <button className='text-[22px] '>Admin</button>
                </div>
                <div className='w-[58px] h-[58px] rounded-full bg-[#EA9797]'></div>
            </div>

        </div>
    );
};

export default Navbar;