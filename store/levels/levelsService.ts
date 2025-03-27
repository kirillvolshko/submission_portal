"use client";
import { ILevelsRespons } from "@/types/levels";
import { BaseQueryParams } from "../baseQuery";

export const levelsService = BaseQueryParams("levels", [
  "LEVELS",
]).injectEndpoints({
  endpoints: (builder) => ({
    getLevels: builder.query<ILevelsRespons, unknown>({
      query: () => ({
        url: "/levels",
        method: "GET",
      }),
    }),
  }),
});
export const { useGetLevelsQuery } = levelsService;
