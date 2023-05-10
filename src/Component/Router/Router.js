import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import EmailList from "../EmailList/EmailList";
import GroupList from "../GroupList/GroupList";
import AddMail from "../AddMail/AddMail";
import AddGroup from "../AddGroup/AddGroup";
import SendMail from "../SendMail/SendMail";
import UserProfile from "../UserProfile/UserProfile";
import Notification from "../Notification/Notification";
import Test from "../Test/Test";
import Login from "../Login/Login";
import PrivateRouter from "./PrivateRouter";
import Main2 from "../../Layout/Main2";
import SendMailSingle from "../SendMailSingle/SendMailSingle";

const router = createBrowserRouter([

    {
        path: "/",
        element: <PrivateRouter> <Main/> </PrivateRouter>,
        children: [

            {
                path: "/user-profile",
                element: <UserProfile />
            },
            {
                path: "/email-list",
                element: <EmailList />
            },
            {
                path: "/group-list",
                element: <GroupList />
            },
            {
                path: "/add-mail",
                element: <AddMail />
            },
            {
                path: "/add-group",
                element: <AddGroup />
            },
            {
                path: "/send-mail-single",
                element: <SendMailSingle />
            },
            {
                path: "/send-mail-bulk",
                element: <SendMail />
            },
            {
                path: "/notification",
                element: <Notification />
            },
            {
                path: "/test",
                element: <Test />
            }
        ]
    },

    {
        path: "/login",
        element: <Login />
    },


]);



export default router;