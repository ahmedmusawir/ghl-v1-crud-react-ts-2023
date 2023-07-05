import {
  createApi,
  fetchBaseQuery,
  skipToken,
} from "@reduxjs/toolkit/query/react";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
}

export interface ApiResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

const makeApiCall = (url: string) => ({
  url,
});

const baseUrl = "https://dummyjson.com";

export const dummyJsonApi = createApi({
  reducerPath: "dummyJsonApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<ApiResponse, void>({
      query: () => makeApiCall(`/products?limit=2`),
    }),
    getSingleProduct: builder.query<Product, number>({
      query: (id) => makeApiCall(`/products/${id}`),
    }),
    getProductCategories: builder.query<string[], void>({
      query: () => makeApiCall(`/products/categories`),
    }),
    getProductByCategory: builder.query<ApiResponse, string>({
      query: (catName) => {
        // console.log('catName in RTK api', catName);
        return makeApiCall(`/products/category/${catName}`);
      },
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useGetProductCategoriesQuery,
  useGetProductByCategoryQuery,
} = dummyJsonApi;
