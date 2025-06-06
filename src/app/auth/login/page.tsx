import React from 'react'
import { Button } from "@/components/ui/button"
import google from "@/assets/icon/google.png"
import apple from "@/assets/icon/apple.png"
import Image from 'next/image'
import LoginForm from '@/app/features/auth/ui/LoginForms/loginForm'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardFooter,
  
} from "@/components/ui/card"


const LoginFormField = () =>{
  return(
     <Card className='border-none shadow-none w-full max-w-[500px]'>
          <CardContent className="space-y-2">
            <div className='grid grid-cols-2 gap-4 justify-center items-start w-full'>
              <Button className='max-md:col-span-2 flex gap-2 h-[50px] bg-transparent border-[var(--border-color)] border-2 text-sm font-medium p-4 hover:bg-transparent hover:scale-[1.1] cursor-pointer text-[var(--text-secondary)] '><Image src={google} alt='google icon' width={30} height={30}/>Sign Up with Google</Button>
              <Button className='max-md:col-span-2 flex gap-2 h-[50px] bg-transparent border-[var(--border-color)] border-2 text-sm font-medium p-4 hover:bg-transparent hover:scale-[1.1] cursor-pointer text-[var(--text-secondary)] '><Image src={apple} alt='google icon' width={30} height={30} className='bg-white rounded-sm'/>Sign Up with Apple</Button>
            </div>
            <div className="flex items-center gap-4 my-4">
  <hr className="flex-grow border-[var(--border-color)]" />
  <span className="text-[var(--text-secondary)] text-[16px]">or</span>
  <hr className="flex-grow border-[var(--border-color)] " />
</div>

            <LoginForm />
          </CardContent>
          <CardFooter>
          <CardFooter>
           <div className='mt-2'>Don&apos;t have an account?<Link href="/auth/signup" className='text-[var(--primary-color)]'> Sign Up</Link></div>
          </CardFooter>
          </CardFooter>
        </Card>
  )
};


const LoginFormContainer =() =>  {
  return (
       <LoginFormField />
  )
}


function page() {
  return (
      <div className='w-full flex flex-col justify-center items-center mt-10'>
        <h2 className='md:text-[40px] text-[24px] text-[var(--text-primary)] font-medium tracking-[-1%]'>Login to your account</h2>
        <div className='mt-4 w-full flex justify-center items-center'>
          <LoginFormContainer />
        </div>
      </div>

  )
}

export default page
