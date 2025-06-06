'use server'

import { agentFormSchema, agentFormSchemaType } from "@/schemas/agentSchema";

export async function createAgentAcct(data: agentFormSchemaType) {
      const validatedFields = agentFormSchema.safeParse(data)

 if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Create agent account.',
      };
    }
// Prepare data for insertion into the database
const { invitation_code, name, email, password } = validatedFields.data;
console.log( invitation_code, name, email, password)
}

