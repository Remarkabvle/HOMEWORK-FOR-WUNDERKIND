import { api } from './index';

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: (params) => ({ 
        url: '/products/search', 
        params 
      }),
      providesTags: ["Product"],
    }),
    createProduct: build.mutation({
      query: (body) => ({ 
        url: '/products', 
        method: 'POST',
        body
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useCreateProductMutation,
} = productApi;
