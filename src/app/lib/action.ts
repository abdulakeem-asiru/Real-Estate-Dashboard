"use server"
import { agentFormSchema, agentFormSchemaType } from "./schema/agentSchema";
import { companyFormSchema, companyFormSchemaType } from "./schema/companySchema";
import { customerFormSchema, customerFormSchemaType } from "./schema/customerSchema";

export async function createCompany(data: companyFormSchemaType) {
      const validatedFields = companyFormSchema.safeParse(data)

 if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Create Company.',
      };
    }
// Prepare data for insertion into the database
const { company_name, name, email, password } = validatedFields.data;
console.log(company_name, name, email, password)
}


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

export async function createCustomerAcct(data: customerFormSchemaType) {
      const validatedFields = customerFormSchema.safeParse(data)

 if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Create customer account.',
      };
    }
// Prepare data for insertion into the database
const {name, email, password } = validatedFields.data;
console.log(name, email, password)
}