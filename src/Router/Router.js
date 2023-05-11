import React from "react";
import { createBrowserRouter } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import Main from "../Layout/Main";
import UserProfile from "../Component/UserProfile/UserProfile";
import EmailList from "../Component/EmailList/EmailList";
import GroupList from "../Component/GroupList/GroupList";
import AddMail from "../Component/AddMail/AddMail";
import AddGroup from "../Component/AddGroup/AddGroup";
import SendMailSingle from "../Component/SendMailSingle/SendMailSingle";
import SendMail from "../Component/SendMail/SendMail";
import Notification from "../Component/Notification/Notification";
import Login from "../Component/Login/Login";


const router = createBrowserRouter([

    {
        path: "/",
        // element: <PrivateRouter> <Main/> </PrivateRouter> ,
        element:  <Main/>  ,
        children: [

            {
                path: "/",
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
        ]
    },

    {
        path: "/login",
        element: <Login />
    },


]);



export default router;