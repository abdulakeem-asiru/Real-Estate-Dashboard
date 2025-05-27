import {z} from 'zod'

export const customerFormSchema = z.object({
    email : z.string().email(),
    name : z.string().nonempty('Name is required'),
      password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-Za-z]/, "Password must contain at least one letter")
    .regex(/\d/, "Password must contain at least one number"),
});

export type customerFormSchemaType = z.infer<typeof customerFormSchema>;