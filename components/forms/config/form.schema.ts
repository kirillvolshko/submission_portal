import { z } from "zod";

export const SubmissionSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required.") // Проверка на пустую строку
    .refine((val) => val.trim() !== "", {
      message: "Name cannot be just spaces.",
    }),

  email: z
    .string()
    .email("This is not a valid email.")
    .refine((val) => val.trim() !== "", {
      message: "Email cannot be just spaces.",
    }),

  description: z
    .string()
    .min(10, "So short")
    .refine((val) => val.trim() !== "", {
      message: "Description cannot be just spaces.",
    }),

  gitHubLink: z
    .string()
    .url("This is not a valid link.")
    .refine((link) => link.includes("github.com"), {
      message: "Link must be a valid GitHub URL.",
    })
    .refine((link) => !link.includes(" "), {
      message: "Link should not contain spaces.",
    })
    .refine((val) => val.trim() !== "", {
      message: "GitHub link cannot be just spaces.",
    }),
  candidateLevel: z.string().min(1, "Candidate level is required."),
});

export const SubmissionValueDefault = {
  name: "",
  email: "",
  description: "",
  gitHubLink: "",
  candidateLevel: "",
};
