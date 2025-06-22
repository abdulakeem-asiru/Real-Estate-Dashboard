import {z} from 'zod'

export const passwordReset = z.object({
      password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-Za-z]/, "Password must contain at least one letter")
    .regex(/\d/, "Password must contain at least one number"),
});
export type passwordResetType = z.infer<typeof passwordReset>;

