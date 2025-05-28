"use client"

import React,  {useState} from 'react'
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
import { createCompany } from '@/app/lib/action';
import { companyFormSchema, companyFormSchemaType } from '@/app/lib/schema/companySchema';
import toast, { Toaster } from 'react-hot-toast'

function CompanyForm() {
    const [isLoading, setIsLoading] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(false)
    const form = useForm<companyFormSchemaType>({
        resolver : zodResolver(companyFormSchema),
        defaultValues : {
            name : "",
           company_name : "",
            email : "",
            password : ""
        }
    })

const onSubmit = async (values : companyFormSchemaType) =>{
   setIsLoading(true)
  setButtonDisabled(true)
  const response = await createCompany(values)
  if(!response?.errors){
    toast.success("Company registered successfully")  
    form.reset()
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
        name='company_name'
        label='Company Name'
        placeholder='Enter company Name'
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
        <Button disabled={buttonDisabled} className='w-full h-[50px] bg-[var(--primary-color)]'>{isLoading ? "Please wait..." : "Sign Up" }</Button>
        </form>
    </Form>
  )
}

interface SignUpFormFieldProps{
    name : FieldPath<companyFormSchemaType>,
    label : string,
    placeholder : string,
    description? : string,
    inputType? : string,
    formControl : Control<companyFormSchemaType >

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
         <Input placeholder={placeholder} type={inputType ?? "text"}   {...field}
         aria-describedby={description ? `${name}-description` : undefined}
          className='h-[40px]'/>
        </FormControl>
        {description && <FormDescription id={`${name}-description`}>{description}</FormDescription>}
        <FormMessage />
       <Toaster /> 
      </FormItem>
    )}
  />
 )
}

export default CompanyForm
