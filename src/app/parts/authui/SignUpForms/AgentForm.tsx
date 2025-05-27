"use client"

import React from 'react'
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
import { agentFormSchema, agentFormSchemaType } from '@/app/lib/schema/agentSchema';
import { createAgentAcct } from '@/app/lib/action';

function AgentForm() {
    const form = useForm<agentFormSchemaType>({
        resolver : zodResolver(agentFormSchema),
        defaultValues : {
            name : "",
            invitation_code : "",
            email : "",
            password : ""
        }
    })

const onSubmit = async (values : agentFormSchemaType) =>{
  const response = await createAgentAcct(values)
  if(!response?.errors){
    alert("Company created successfully")
    form.reset()
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
        name='invitation_code'
        label='Invitation Code'
        placeholder='Enter company invitation code'
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
        <Button className='w-full h-[50px] bg-[var(--primary-color)]'>Sign Up</Button>
        </form>
    </Form>
  )
}

interface SignUpFormFieldProps{
    name : FieldPath<agentFormSchemaType>,
    label : string,
    placeholder : string,
    description? : string,
    inputType? : string,
    formControl : Control<agentFormSchemaType >

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
      </FormItem>
    )}
  />
 )
}

export default AgentForm
