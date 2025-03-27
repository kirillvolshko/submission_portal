"use client";
import { CardContainer } from "@/components/common/CardContainer";
import { SubmissionForm } from "@/components/forms/SubmissionForm";
import { store } from "@/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <div className="flex justify-center items-center h-screen">
        <CardContainer>
          <SubmissionForm />
        </CardContainer>
      </div>
    </Provider>
  );
}
