import {z} from 'zod'

export const loginFormSchema = z.object({
    email : z.string().email(),
      password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-Za-z]/, "Password must contain at least one letter")
    .regex(/\d/, "Password must contain at least one number"),
});
export type LoginFormSchemaType = z.infer<typeof loginFormSchema>;

export const EmailFormSchema = z.object({
    email : z.string().email(),
});
export type EmailFormSchemaType = z.infer<typeof EmailFormSchema>;

export const PasswordFormSchema = z.object({
      password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-Za-z]/, "Password must contain at least one letter")
    .regex(/\d/, "Password must contain at least one number"),
});
export type PasswordFormSchemaType = z.infer<typeof PasswordFormSchema>;

