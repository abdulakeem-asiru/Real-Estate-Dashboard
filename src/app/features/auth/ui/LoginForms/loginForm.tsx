"use client"
import React, {useState} from 'react'
import { zodResolver } from "@hookform/resolvers/zod";
import {FieldPath, useForm, Control } from "react-hook-form"
import { Form,
     FormField,
     FormControl,
     FormItem,
      FormDescription, 
      FormLabel, 
      FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { loginFormSchema, LoginFormSchemaType } from '@/schemas/loginSchema';
import toast, { Toaster } from 'react-hot-toast'
import { login } from '@/actions/auth';
import { useRouter } from 'next/navigation';


function LoginForm() {
   const [isLoading, setIsLoading] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(false)
    const form = useForm<LoginFormSchemaType>({
        resolver : zodResolver(loginFormSchema),
        defaultValues : {
            email : "",
            password : ""
        }
    })
const router = useRouter();
const onSubmit = async (values : LoginFormSchemaType) =>{

setIsLoading(true)
  setButtonDisabled(true)

  try {
    const response = await login(values)

    if (response?.error) {
      toast.error(response.error.toString())
      return
    }
    toast.success("Authenticated successfully")
    router.push('/dashboard')
  } catch (err) {
    console.log(err)
    toast.error("An unexpected error occurred")
  } finally {
    setIsLoading(false)
    setButtonDisabled(false)
  }

}
  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
         <LoginFormField 
        name='email'
        label='Email'
        placeholder='adenuga@gmail.com'
        inputType='email'
        formControl={form.control}
        />
         <LoginFormField 
        name='password'
        label='Password'
        placeholder='Create a password'
        inputType='pssword'
        description='Use a secure password'
        formControl={form.control}
        />
        <Button disabled={buttonDisabled} className='w-full h-[50px] bg-[var(--primary-color)]'> {isLoading ? "Please wait..." : "Login" }</Button>
        </form>
    </Form>
  )
}

interface SignUpFormFieldProps{
    name : FieldPath<LoginFormSchemaType>,
    label : string,
    placeholder : string,
    description? : string,
    inputType? : string,
    formControl : Control<LoginFormSchemaType >

}

const LoginFormField : React.FC<SignUpFormFieldProps> = ({
    name,
    label,
    placeholder,
    description,
    inputType,
    formControl}
) => {
 return (
    <FormField
    control={formControl}
    name={name}
    render={({field}) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
         <Input placeholder={placeholder} type={inputType ?? "text"}  {...field} className='h-[40px]'/>
        </FormControl>
        {description && <FormDescription>{description}</FormDescription>}
        <FormMessage />
        <Toaster />
      </FormItem>
    )}
  />
 )
}

export default LoginForm
