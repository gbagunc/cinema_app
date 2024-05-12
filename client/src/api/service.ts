/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchBaseQuery, BaseQueryFn } from "@reduxjs/toolkit/query";
import { URL } from "./config";

const fetchQuery = fetchBaseQuery({
  baseUrl: URL,
});

export const baseQuery: BaseQueryFn<any, any> = async (
  args,
  api,
  extraOptions,
) => {
  const result = await fetchQuery(args, api, extraOptions);
  return result;
};
