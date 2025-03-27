import { IAssignmentRespons } from "@/types/assigment";
import { BaseQueryParams } from "../baseQuery";

export const assignmentService = BaseQueryParams("assigment", [
  "ASSIGMENT",
]).injectEndpoints({
  endpoints: (builder) => ({
    sendAssignment: builder.mutation<unknown, IAssignmentRespons>({
      query: (body) => ({
        url: "/assignments",
        method: "POST",
        body,
      }),
    }),
  }),
});
export const { useSendAssignmentMutation } = assignmentService;
