import { api } from './index';

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: (params) => ({ 
        url: '/users/search', 
        params 
      }),
      providesTags: ["User"]
    }),
    signIn: build.mutation({
      query: (body) => ({
        url: "/auth/sign-in",
        method: "POST",
        body
      }),
      invalidatesTags: ["User"]
    }),
    createUser: build.mutation({
      query: (body) => ({
        url: "/",
        method: "POST",
        body
      }),
      invalidatesTags: ["User"]
    }),
  }),
});

export const {
  useGetUsersQuery,
  useSignInMutation,
  useCreateUserMutation,
} = userApi;
