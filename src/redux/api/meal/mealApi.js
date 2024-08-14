import { apiSlice } from "../baseApi";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    // Get All Meals for a User
    getAllMealForUser: build.query({
      query: (id) => {
        return {
          url: `/api/meal/${id}`,
          method: "GET",
        };
      },
      providesTags: ["meal"],
      transformResponse: (response) => response, // If the response is an array, just return it as is
    }),
    // Create Meal
    createMeal: build.mutation({
      query: (data) => ({
        url: `/api/meal`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data, // changed `data` to `body`
      }),
      invalidatesTags: ["meal"],
    }),
  }),
});


export const { useGetAllMealForUserQuery, useCreateMealMutation } = extendedApiSlice;
