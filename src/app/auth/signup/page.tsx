import React from 'react'
import { Button } from "@/components/ui/button"
import google from "@/assets/icon/google.png"
import apple from "@/assets/icon/apple.png"
import Link from 'next/link'

import {
  Card,
  CardContent,
  CardFooter,
  
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Image from 'next/image'
import CustomerForm from '@/app/features/auth/ui/SignUpForms/CustomerForm'
// import AgentForm from '@/app/parts/authui/SignUpForms/AgentForm'
import CompanyForm from '@/app/features/auth/ui/SignUpForms/CompanyForm'



const Customer = () =>{
  return(
     <Card className='border-none shadow-none'>
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

            <CustomerForm />
          </CardContent>
          <CardFooter>
          <div className='mt-2'>Already have an account?<Link href="/auth/login" className='text-[var(--primary-color)]'> Login</Link></div>
          </CardFooter>
        </Card>
  )
};



// const Agent = () =>{
//   return(
//      <Card className='border-none shadow-none'>
//           <CardContent className="space-y-2">
//             <AgentForm />
//           </CardContent>
//           <CardFooter>
//           <div className='mt-2'>Already have an account?<Link href="/auth/login" className='text-[var(--primary-color)]'> Login</Link></div>
//           </CardFooter>
//         </Card>
//   )
// };

const Company = () =>{
  return(
     <Card className='border-none shadow-none'>
          <CardContent className="space-y-2">
            <CompanyForm />
          </CardContent>
          <CardFooter>
           <div className='mt-2'>Already have an account?<Link href="/auth/login" className='text-[var(--primary-color)]'> Login</Link></div>
          </CardFooter>
        </Card>
  )
};
const TabsComponent =() =>  {
  return (
    <Tabs defaultValue="customer" className="max-w-[500px] w-full">
      <TabsList className="grid w-full grid-cols-2 h-[50px]">
        <TabsTrigger value="customer" className='transition-all data-[state=active]:bg-[var(--primary-color)] data-[state=active]:text-[#ffffff] data-[state=active]:shadow-md'>Customer</TabsTrigger>
        <TabsTrigger value="company" className=' transition-all data-[state=active]:bg-[var(--primary-color)] data-[state=active]:text-[#ffffff] data-[state=active]:shadow-md'>Company</TabsTrigger>
        {/* <TabsTrigger value="agent" className='transition-all data-[state=active]:bg-[var(--primary-color)] data-[state=active]:text-[#ffffff] data-[state=active]:shadow-md'>Agent</TabsTrigger> */}
      </TabsList>
      <TabsContent value="customer">
       <Customer />
      </TabsContent>
      {/* <TabsContent value="agent">
     <Agent />
      </TabsContent> */}
      <TabsContent value="company">
        <Company />
      </TabsContent>
    </Tabs>
  )
}


function page() {
  return (
      <div className='w-full flex flex-col justify-center items-center mt-10'>
        <h2 className='md:text-[40px] text-[24px] text-[var(--text-primary)] font-medium tracking-[-1%]'>Create an account as</h2>
        <div className='mt-4 w-full flex justify-center items-center'>
          <TabsComponent />
        </div>
      </div>

  )
}

export default page
