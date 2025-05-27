"use client"

import React from 'react'
import {z} from "zod"
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


const formSchema = z.object({
    email : z.string().email(),
      password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-Za-z]/, "Password must contain at least one letter")
    .regex(/\d/, "Password must contain at least one number"),
});
type FormSchemaType = z.infer<typeof formSchema>;
function LoginForm() {
    const form = useForm<FormSchemaType>({
        resolver : zodResolver(formSchema),
        defaultValues : {
            email : "",
            password : ""
        }
    })

const onSubmit = (values : FormSchemaType) =>{
console.log(values)
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
        <Button className='w-full h-[50px] bg-[var(--primary-color)]'>Sign Up</Button>
        </form>
    </Form>
  )
}

interface SignUpFormFieldProps{
    name : FieldPath<FormSchemaType>,
    label : string,
    placeholder : string,
    description? : string,
    inputType? : string,
    formControl : Control<FormSchemaType >

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
         <Input placeholder={placeholder} type={inputType ?? "text"} required {...field} className='h-[40px]'/>
        </FormControl>
        {description && <FormDescription>{description}</FormDescription>}
        <FormMessage />
      </FormItem>
    )}
  />
 )
}

export default LoginForm
