"use client";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { resetData } from "@/store/assignments/assignmentSlice";

export const SubmitData = () => {
  const dispatch = useDispatch();
  const assignment = useSelector((state: RootState) => state.assignment);

  const handleOnClick = () => {
    dispatch(resetData());
  };

  return (
    <>
      <p className="text-center text-primary text-xl font-semibold">
        Thank {assignment.name} submitting your assigment!
      </p>
      <p className="text-center text-primary/85 text-[16px]">
        We are check information and write on {assignment.email} email
      </p>
      <div className="pt-5 flex justify-center items-center">
        <Link href={"/"}>
          <Button onClick={handleOnClick}>
            <ArrowLeft /> Back to form
          </Button>
        </Link>
      </div>
    </>
  );
};
