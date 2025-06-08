'use server'
import { companyFormSchema, companyFormSchemaType } from "@/schemas/companySchema";
import { createClient } from "@/utils/supabase/server";

export async function createCompany(data: companyFormSchemaType) {
    const supabase = await createClient()
    const validatedFields = companyFormSchema.safeParse(data)

 if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Create Company.',
      };
    }

const { company_name, name, email, password } = validatedFields.data;

try{
const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options : {
      data : {
        full_name : name,
        company_name :company_name,
        role : "company"
      }
    }
  });
  
  console.log(data)
   if (error) {
        return {
          error : error.message || "Unable to signUp",
        }
   }
   if (data.user?.identities?.length === 0){
    return {
          error : "User already exist",
        }
    }else{
      return {
        success : true,
        redirect : '/auth/emailconfirmation'
      }
    }

  } catch (err) {
    console.error('Signup Error', err);
    throw err;
  }
}
