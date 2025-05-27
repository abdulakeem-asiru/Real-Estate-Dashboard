// src/app/lib/schemas/companyFormSchema.ts
import { z } from "zod";

export const companyFormSchema = z.object({
  company_name: z.string().trim().nonempty("Company Name is required").min(2, "Company Name must be at least 2 characters"),
  email: z.string().trim().email("Invalid email address"),
  name: z.string().trim().nonempty("Name is required").min(2, "Name must be at least 2 characters"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-Za-z]/, "Password must contain at least one letter")
    .regex(/\d/, "Password must contain at least one number")
    .regex(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character"),
});

export type companyFormSchemaType = z.infer<typeof companyFormSchema>;