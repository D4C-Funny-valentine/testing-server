import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dataApi = createApi({
  reducerPath: "data",
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:3000` }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => ({
        url: "/blogs",
        method: "GET",
      }),
    }),
  }),
});

export const {useGetDataQuery} = dataApi