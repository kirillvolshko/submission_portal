"use client";
import { apiUrl } from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BaseQueryParams = (reducerPath: string, tags: string[]) => {
  const baseQuery = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
    endpoints: () => ({}),
    reducerPath,
    tagTypes: tags?.length ? tags : [],
  });
  return baseQuery;
};
