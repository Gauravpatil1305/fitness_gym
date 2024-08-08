import { apiSlice } from "../baseApi";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    loggedInUser: build.mutation({
      query: (loginData) => ({
        url: "/api/login",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: loginData,
      }), 
      invalidatesTags: ["user"],
    }),
    createUser: build.mutation({
      query: (data) => ({
        url: "/api/register",
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        data: data,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useLoggedInUserMutation, useCreateUserMutation } =
  extendedApiSlice;
