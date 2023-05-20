import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const emailApi = createApi({
  reducerPath: "emailApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://103.120.36.117/email/",
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

      async onQueryStarted(data, { dispatch, queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          console.log(res.data);
        } catch (error) {
          console.log(error)
        }
      }

    }),

    deleteEmail: builder.mutation({
      query: (email) => ({
        method: "GET",
        url: `/delete/${email}`,
      }),
      invalidatesTags: ["Email"],
    }),


    // *******************Group Api's*********************//
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
      async onQueryStarted(data, { dispatch, queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          console.log(res);
        } catch (error) {
          console.log(error)
        }
      }
    }),

    sendBulkMail: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: `/send_email_by_group/${data.group}/`,
        body: data,
      }),
      invalidatesTags: ["Email"],
      async onQueryStarted(data, { dispatch, queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          console.log(res);
        } catch (error) {
          console.log(error)
        }
      }
    }),


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
