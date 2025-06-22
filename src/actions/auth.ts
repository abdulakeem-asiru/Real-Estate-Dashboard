"use server"
import { revalidatePath } from 'next/cache'
import { createClient } from "@/utils/supabase/server";
import { loginFormSchema, LoginFormSchemaType } from "@/schemas/loginSchema";
import { passwordReset, passwordResetType } from '@/schemas/passwordReset';

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

export async function resetPassword(values: passwordResetType){
  const supabase = await createClient()

   const validatedFields = passwordReset.safeParse(values)
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to create customer account.',
    }
  }
  const { password } = validatedFields.data

  try {
    const { error } = await supabase.auth.updateUser({
  password: password
})
 if (error) {
        return {
          error : error.message || "Unable to Update password",
        }
    }
  } catch (err) {
    console.log(err)
      return {
      error : 'An unexpected error occurred. Please try again later.',
    }
    
  }
}

      