import React, { useContext, useState } from "react";
import "./EmailList.css";
import { BiSearchAlt } from "react-icons/bi";
import { RiArrowDownSLine } from "react-icons/ri";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import SectionTitle from "../../Utilities/SectionTitle/SectionTitle";
import EmailEdit from "./EmailEdit";

const EmailList = () => {

    return (
        <div className="email-list">

            <SectionTitle> Email List </SectionTitle>

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

            <EmailEdit />


            {/* Prev Next btn */}
            <div className="eml-prev-next-btn">
                <button>
                    <MdArrowBackIosNew /> Previous Page
                </button>

                <button>
                    Next Page
                    <MdArrowForwardIos />
                </button>
            </div>

        </div>
    );
};

export default EmailList;