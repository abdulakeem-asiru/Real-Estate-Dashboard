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
import { customerFormSchema, customerFormSchemaType } from '@/app/lib/schema/customerSchema';
import { createCustomerAcct } from '@/app/lib/action';
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/navigation';



function CustomerForm() {
  const [isLoading, setIsLoading] = useState(false)
const [buttonDisabled, setButtonDisabled] = useState(false)
    const form = useForm<customerFormSchemaType>({
        resolver : zodResolver(customerFormSchema),
        defaultValues : {
            name : "",
            email : "",
            password : ""
        }
    })
const router = useRouter();
const onSubmit = async(values : customerFormSchemaType) =>{
  setIsLoading(true)
  setButtonDisabled(true)
  try{
    const response = await createCustomerAcct(values)
    if (response?.error) {
      toast.error(response.error.toString())
      return
    } 
    toast.success("Registered successfully, Please verify email")
    form.reset()
    router.push('/dashboard')
    setIsLoading(false)
    setButtonDisabled(false)
  }
  catch(err){
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
        <SignUpFormField 
        name='name'
        label='Full Name'
        placeholder='Enter your fullname'
        inputType='text'
        formControl={form.control}
        />
         <SignUpFormField 
        name='email'
        label='Email'
        placeholder='adenuga@gmail.com'
        inputType='email'
        formControl={form.control}
        />
         <SignUpFormField 
        name='password'
        label='Password'
        placeholder='Create a password'
        inputType='password'
        description='Use a secure password'
        formControl={form.control}
        />
        <Button disabled={buttonDisabled} className='w-full h-[50px] bg-[var(--primary-color)]'> {isLoading ? "Please wait..." : "Sign Up" }</Button>
        </form>
    </Form>
  )
}

interface SignUpFormFieldProps{
    name : FieldPath<customerFormSchemaType>,
    label : string,
    placeholder : string,
    description? : string,
    inputType? : string,
    formControl : Control<customerFormSchemaType >

}

const SignUpFormField : React.FC<SignUpFormFieldProps> = ({
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

export default CustomerForm
