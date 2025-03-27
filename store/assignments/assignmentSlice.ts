import { IAssignmentRespons } from "@/types/assigment";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IAssignmentRespons = {
  name: "",
  email: "",
  assignment_description: "",
  github_repo_url: "",
  candidate_level: "",
};

export const assignmentSlice = createSlice({
  name: "assignment",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<IAssignmentRespons>) => {
      return action.payload;
    },
    resetData: () => initialState,
  },
});
export const { setData, resetData } = assignmentSlice.actions;

export default assignmentSlice.reducer;
