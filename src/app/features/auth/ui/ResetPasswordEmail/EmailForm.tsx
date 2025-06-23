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
import { EmailFormSchema, EmailFormSchemaType} from '@/schemas/loginSchema';
import toast, { Toaster } from 'react-hot-toast'
import { resetPasswordForEmail } from '@/actions/auth';
import { useRouter } from 'next/navigation';


function EmailForm() {
   const [isLoading, setIsLoading] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(false)
    const form = useForm<EmailFormSchemaType>({
        resolver : zodResolver(EmailFormSchema),
        defaultValues : {
            email : "",
        }
    })
const router = useRouter();
const onSubmit = async (values : EmailFormSchemaType) =>{

setIsLoading(true)
  setButtonDisabled(true)

  try {
    const response = await resetPasswordForEmail(values)

    if (response?.error) {
      toast.error(response.error.toString())
      return
    }
    toast.success("A Magic Link has been sent")
    router.push('/auth/emailconfirmation')
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
         <EmailFormField 
        name='email'
        label='Email'
        placeholder='adenuga@gmail.com'
        inputType='email'
        formControl={form.control}
        />
        <Button disabled={buttonDisabled} className='w-full h-[50px] bg-[var(--primary-color)]'> {isLoading ? "Please wait..." : "Send" }</Button>
        </form>
    </Form>
  )
}

interface SignUpFormFieldProps{
    name : FieldPath<EmailFormSchemaType>,
    label : string,
    placeholder : string,
    description? : string,
    inputType? : string,
    formControl : Control<EmailFormSchemaType >

}

export const EmailFormField : React.FC<SignUpFormFieldProps> = ({
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

export default EmailForm
