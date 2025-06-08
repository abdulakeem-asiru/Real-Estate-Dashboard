import { Button } from '@/components/ui/button'
import React from 'react'
import { Plus } from 'lucide-react'
import CardWrapper from '@/app/features/dashboard/ui/Card'
import SalesChart from '@/app/features/dashboard/ui/chart/SalesChart'
import { PieChartWrapper } from '@/app/features/dashboard/ui/chart/PieChart'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'



export default async function  DashboardPage(){
const supabase = await createClient()
  const { data :authData, error: authError } = await supabase.auth.getUser()
  if (authError || !authData?.user) {
    redirect('/auth/login')
  }
  const {data :customerData, error : customerError} = await supabase
    .from('customers')
    .select('*')
    .eq('id', authData.user.id)
    .single();

     if (customerError) {
    console.error("Customer fetch failed:", customerError.message);
  }

  return (
    <div className='m-auto w-full mb-30'>
     <div className='md:flex items-end justify-between hidden'>
      <div className='w-full'>
        <h2 className='text-[24px] font-medium text-[var(--text-primary)] mb-1'>Dashboard</h2>
        <p className='text-[16px] font-[500] text-[var(--text-secondary)]  max-md:w-[300px]'>Welcome <span className='text-[var(--text-primary)]'>{customerData?.name.split(' ')[0]}</span>, Let’s dive into your personalized setup guide.</p>
      </div>
      <Button className='bg-[var(--primary-color)] cursor-pointer
      py-5 px-6 text-white hover:bg-[var(--primary-color)]'><span><Plus /></span><span className='hidden md:block '>Add Property</span> </Button>
     </div>
     <div className='md:mt-4 '>
      <CardWrapper />
     </div>
     <div className='w-full mt-4 grid grid-cols-3 gap-4'>
      <div className='w-full lg:col-span-2 col-span-3'>
      <SalesChart />
      </div>
      <div className='w-full lg:col-span-1 col-span-3'>
        <PieChartWrapper />
      </div>
     </div> 
    <div className='w-full h-60 bg-amber-400 mt-4 rounded-lg'></div>
    </div>
  )
}
