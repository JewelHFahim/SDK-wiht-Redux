import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Navbar/Navbar';
import "./Main.css";
import BottomNav from "../Component/Navbar/BottomNav";
import Sidebar from './Sidebar';



const Main = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }


    return (
        <>
            <div>

                <div className='w-full text-center'>
                    <Navbar toggleDrawer={toggleDrawer} isOpen={isOpen} />
                </div>

                <div>
                    <Sidebar isOpen={isOpen} toggleDrawer={toggleDrawer} />
                </div>

                <div className={`py-[20px] lg:pt-[40px] ${isOpen ? " lg:pl-[360px] lg:pr-[50px]" : "px-8 lg:px-[200px]"}`}>
                    <Outlet />
                </div>

                <div className='fixed bottom-0 lg:hidden w-full'>
                    <BottomNav toggleDrawer={toggleDrawer} isOpen={isOpen} />
                </div>
            </div>

        </>
    );
};

export default Main;