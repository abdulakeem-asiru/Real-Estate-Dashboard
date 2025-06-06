'use server'
import { customerFormSchema, customerFormSchemaType } from "@/schemas/customerSchema";
import { createClient } from "@/utils/supabase/server";

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
    options : {
      data : {
        full_name : name,
        role : "customer"
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
      return{
        success : true,
        redirect :'/auth/emailconfirmation'
      }
   }

  } catch (err) {
    console.error('Signup Error');
    throw err;
  }
}