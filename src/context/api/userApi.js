import { api } from "./index";

// User API endpoints
export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Fetch users
    getUsers: build.query({
      query: (params) => ({
        url: "/users/search",
        params,
      }),
      providesTags: ["User"],
    }),
    // User sign-in
    signIn: build.mutation({
      query: (body) => ({
        url: "/auth/sign-in",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    // Create new user
    createUser: build.mutation({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useGetUsersQuery, useCreateUserMutation, useSignInMutation } = userApi;
