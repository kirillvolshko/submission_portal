"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import { useForm } from "react-hook-form";
import { SubmissionSchema, SubmissionValueDefault } from "./config/form.schema";
import { z } from "zod";
import InputField from "./fields/InputField";
import TextareaField from "./fields/TextAreaField";
import SelectField from "./fields/SelectField";
import { Button } from "../ui/button";
import { useGetLevelsQuery } from "@/store/levels/levelsService";
import { useSendAssignmentMutation } from "@/store/assignments/assignmentService";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setData } from "@/store/assignments/assignmentSlice";

type FormValues = z.infer<typeof SubmissionSchema>;
export const SubmissionForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(SubmissionSchema),
    defaultValues: SubmissionValueDefault,
  });
  const { data, error } = useGetLevelsQuery({});
  const dispatch = useDispatch();
  const [sendData] = useSendAssignmentMutation();
  const router = useRouter();
  const options =
    data?.levels.map((item) => ({
      label: item,
      value: item,
    })) || [];

  const handleOnSubmit = async (data: FormValues) => {
    try {
      await sendData(data).unwrap();
      dispatch(setData(data));
      form.reset();
      router.push("/thank-you");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleOnSubmit)}
          className="flex flex-col gap-5"
        >
          <InputField
            control={form.control}
            name="name"
            label="Name"
            placeholder="Input your name"
          />
          <InputField
            control={form.control}
            name="email"
            label="Email"
            placeholder="Input your email"
          />
          <TextareaField
            control={form.control}
            name="assignment_description"
            label="Description"
            placeholder="Input your assigment description"
            classNameTextarea="w-full"
          />
          <InputField
            control={form.control}
            name="github_repo_url"
            label="GitHub Link"
            placeholder="Input your GitHub link"
          />
          <SelectField
            control={form.control}
            name="candidate_level"
            label="Candidate Level"
            placeholder="Select your level"
            options={options}
            error={error ? "Failed to load levels" : undefined}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};
