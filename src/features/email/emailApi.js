import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const emailApi = createApi({
  reducerPath: "emailApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.50.245/email",
  }),

  tagTypes: ["Email"],

  endpoints: (builder) => ({

    // *******************Email Api's*********************/
    emails: builder.query({
      query: () => "/get-email/",
      providesTags: ["Email"],
    }),

 
    addEmail: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/create-email/",
        body: data,
      }),
      invalidatesTags: ["Email"],
    }),

    deleteEmail: builder.mutation({
      query: (email) => ({
        method: "DELETE",
        url: `/delete/${email}`,
      }),
      invalidatesTags: ["Email"],
    }),



    // *******************Group Api's*********************/
    groups: builder.query({
      query: () => "/get-group/",
      providesTags: ["Email"],
    }),

    addGroup: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/create-group/",
        body: data,
      }),
      invalidatesTags: ["Email"],
    }),


    // *******************Sending Mail Api's*********************/
    sendSingleMail: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/send-single/",
        body: data,
      }),
      invalidatesTags: ["Email"],
    }),

    sendBulkMail: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: `/send_email_by_group/${data.group}/`,
        body: data,
      }),
      invalidatesTags: ["Email"],
    }),

    // contact: builder.query({
    //   query: (id) => `/contacts/${id}`,
    //   providesTags: ["Email"],
    // }),



    // updateContact: builder.mutation({
    //   query: (data) => ({
    //     url: `/contacts/${data.id}`,
    //     method: "PUT",
    //     body: data,
    //   }),
    //   invalidatesTags: ["Email"],
    // }),


  }),
});

export const { useEmailsQuery, useAddEmailMutation, useDeleteEmailMutation, useGroupsQuery, useAddGroupMutation, useSendSingleMailMutation, useSendBulkMailMutation } = emailApi;
