import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";


const baseQuery = fetchBaseQuery({
  baseUrl: "https://ecommerceapi.firdavsdev.uz",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("auth-token");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

// Retry configuration for API requests
const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

export const api = createApi({
  reducerPath: "mainApi",
  baseQuery: baseQueryWithRetry,
  tagTypes: ["User"],
  endpoints: () => ({}),
});
