import React from 'react';
import "./Notification.css";
import Trash from "../../Assets/Trash Box 2.svg";
import { GoMailRead } from 'react-icons/go';
import SectionTitle from '../../Utilities/SectionTitle/SectionTitle';


const Notification = () => {

    return (
        <div className='notification-cont'>

            <SectionTitle>NOTIFICATION</SectionTitle>

            <div className='grid grid-cols-1 gap-5'>

                <div className='notification-box'>
                    <div className='flex gap-[10px] lg:gap-[40px]'>
                        <h3 className='font-[500]'>01</h3>
                        <p className='lg:w-[800px]'>Your Notifications Show Here. if there is any link just click in here and
                            send customer them to those page.</p>
                    </div>
                    <div className='icon-contaier lg:flex items-center gap-[30px]'>
                        <button><GoMailRead className='text-[40px]' /></button>
                        <button><img src={Trash} alt="" /></button>
                    </div>
                </div>
                <div className='notification-box'>
                    <div className='flex gap-[10px] lg:gap-[40px]'>
                        <h3 className='font-[500]'>01</h3>
                        <p className='lg:w-[800px]'>Your Notifications Show Here. if there is any link just click in here and
                            send customer them to those page.</p>
                    </div>
                    <div className='icon-contaier lg:flex items-center gap-[30px]'>
                        <button><GoMailRead className='text-[40px]' /></button>
                        <button><img src={Trash} alt="" /></button>
                    </div>
                </div>



            </div>



        </div>
    );
};

export default Notification;