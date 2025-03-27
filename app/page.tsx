"use client";
import { CardContainer } from "@/components/common/CardContainer";
import { SubmissionForm } from "@/components/forms/SubmissionForm";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <CardContainer>
        <SubmissionForm />
      </CardContainer>
    </div>
  );
}
