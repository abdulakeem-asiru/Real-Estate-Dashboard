"use server"
import { agentFormSchema, agentFormSchemaType } from "./schema/agentSchema";
import { companyFormSchema, companyFormSchemaType } from "./schema/companySchema";
import { customerFormSchema, customerFormSchemaType } from "./schema/customerSchema";
import { revalidatePath } from 'next/cache'
import { createClient } from "@/utils/supabase/server";
import { loginFormSchema, LoginFormSchemaType } from "./schema/loginSchema";

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

export async function createCustomerAcct(values: customerFormSchemaType) {
    const supabase = await createClient()
      const validatedFields = customerFormSchema.safeParse(values)

 if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Create customer account.',
      };
    }
// Prepare data for insertion into the database
const {name, email, password } = validatedFields.data;
try{
const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  if (error) throw error;
  console.log('Auth Data:', data); // Log auth response
    if (!data?.user?.id) throw new Error('User ID not found in auth response');

  await supabase.from('customers').insert({ id: data.user.id, name: name });
  return { success: true, redirect: '/dashboard' };
  } catch (err) {
    console.error('Signup Error');
    throw err;
  }
}

export async function login(values: LoginFormSchemaType) {
  const supabase = await createClient()
  const validatedFields = loginFormSchema.safeParse(values)
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to create customer account.',
    }
  }
  const { email, password } = validatedFields.data
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) {
        return {
          error : error.message || "Invalid Credentials",
        }
    }
  } catch (err) {
    console.log(err)
    return {
      error : 'An unexpected error occurred. Please try again later.,',
    }
  }
}


export async function logout(){
  const supabase = await createClient()
  try {
    const { error } = await supabase.auth.signOut()
     if (error) {
        return {
          error : error.message || "Unable to Logout",
        }
    }
    revalidatePath('/', 'layout')

  } catch (err) {
    console.log(err)
      return {
      error : 'An unexpected error occurred. Please try again later.',
    }
    
  }
}