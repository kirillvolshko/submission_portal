"use client";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

export const SubmitData = () => {
  const assignment = useSelector((state: RootState) => state.assignment);
  return (
    <>
      <p className="text-center text-primary text-xl font-semibold">
        Thank {assignment.name} submitting your assigment!
      </p>
      <p className="text-center text-primary/85 text-[16px]">
        We are check information and write on {assignment.email} email
      </p>
    </>
  );
};
