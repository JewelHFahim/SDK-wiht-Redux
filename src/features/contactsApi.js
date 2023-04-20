import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),

  tagTypes: ["Contact"],

  endpoints: (builder) => ({
    contacts: builder.query({
      query: () => "/contacts",
      providesTags: ["Contact"],
    }),

    contact: builder.query({
      query: (id) => `/contacts/${id}`,
      providesTags: ["Contact"],
    }),

    addContact: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/contacts",
        body: data,
      }),
      invalidatesTags: ["Contact"],
    }),

    deleteContact: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/contacts/${id}`,
      }),
      invalidatesTags: ["Contact"],
    }),
    
    updateContact: builder.mutation({
      query: (data) => ({
        url: `/contacts/${data.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Contact"],
    }),
  }),
});

export const {
  useContactsQuery,
  useContactQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useUpdateContactMutation,
} = contactsApi;
