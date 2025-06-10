import { Button } from '@/components/ui/button'
import React from 'react'
import { Plus } from 'lucide-react'
import CardWrapper from '@/app/features/dashboard/ui/Card'
import SalesChart from '@/app/features/dashboard/ui/chart/SalesChart'
import { PieChartWrapper } from '@/app/features/dashboard/ui/chart/PieChart'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { DataTable } from './orders/data-table'
import { columns, Orders } from "./orders/columns"
import { CustomersOrder } from '../data/order'

async function getData(): Promise<Orders[]> {
  // Fetch data from your API here.
  return CustomersOrder
}


export default async function  DashboardPage(){
const tableData = await getData()
const supabase = await createClient()
  const { data : authData, error } = await supabase.auth.getUser()
  if (error || !authData?.user) {
    redirect('/auth/login')
  }

  return (
    <div className='m-auto w-full mb-30  md:p-8 p-6'>
     <div className='md:flex items-end justify-between hidden'>
      <div className='w-full'>
        <h2 className='text-[24px] font-medium text-[var(--text-primary)] mb-1'>Dashboard</h2>
        <p className='text-[16px] font-[500] text-[var(--text-secondary)]  max-md:w-[300px]'>Welcome, Let’s dive into your personalized setup guide.</p>
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
    <div className=' mt-4 rounded-lg w-full'>
    <DataTable columns={columns} tableData={tableData} heading= "Recent Orders" filter=""/>
    </div>
    </div>
  )
}
