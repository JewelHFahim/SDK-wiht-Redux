import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { BsUiChecksGrid } from 'react-icons/bs';
import "./BottomNav.css";


const BottomNav = ({ toggleDrawer, isOpen }) => {

    return (
        <div className='BottomNav'>

            <div>
                <button><FaUserAlt className='text-[37px]' /></button>
            </div>

            <div>
                <button onClick={toggleDrawer}> <BsUiChecksGrid className='text-[37px]' /> </button>
            </div>
        </div>
    );
};

export default BottomNav;