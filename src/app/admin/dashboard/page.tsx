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

async function getData(): Promise<Orders[]> {
  // Fetch data from your API here.
  return [{
  id: "cst001",
  customer: { name: "Chukwudi Okonkwo", imageUrl: "/avatar.png" },
  purchaseDate: "2025-05-21",
  contact: "+2347012345678",
  propertiesType: "Land",
  purchaseProperties: "Orchid Estate Phase 2",
  status: "paid",
  email: "kunle@example.com",
  amount: 30000,
},
{
  id: "cst002",
  customer: { name: "Chiamaka Eze", imageUrl: "/avatar.png" },
  purchaseDate: "2025-05-19",
  contact: "+2348123456789",
  propertiesType: "House",
  purchaseProperties: "Lekki Palm View",
  status: "unpaid",
  email: "amaka@example.com",
  amount: 85000,
},
{
  id: "cst003",
  customer: { name: "Adebayo Adeyemi", imageUrl: "/avatar.png" },
  purchaseDate: "2025-04-15",
  contact: "+2348034567890",
  propertiesType: "Apartment",
  purchaseProperties: "Sunset Residences",
  status: "paid",
  email: "tunde@example.com",
  amount: 45000,
},
{
  id: "cst002",
  customer: { name: "Adebayo Adeyemi", imageUrl: "/avatar.png" },
  purchaseDate: "2025-04-15",
  contact: "+2348034567890",
  propertiesType: "Apartment",
  purchaseProperties: "Sunset Residences",
  status: "paid",
  email: "tunde@example.com",
  amount: 45000,
},
{
  id: "cst004",
  customer: { name: "Fatima Yusuf", imageUrl: "/avatar.png" },
  purchaseDate: "2025-03-29",
  contact: "+2349012345678",
  propertiesType: "Land",
  purchaseProperties: "Harmony Gardens",
  status: "unpaid",
  email: "zainab@example.com",
  amount: 30000,
},
{
  id: "cst005",
  customer: { name: "Emeka Nwosu", imageUrl: "/avatar.png" },
  purchaseDate: "2025-05-01",
  contact: "+2348065432198",
  propertiesType: "Duplex",
  purchaseProperties: "Eden Court",
  status: "paid",
  email: "john.okoro@example.com",
  amount: 150000,
},
{
  id: "cst006",
  customer: { name: "Ifeoma Okeke", imageUrl: "/avatar.png" },
  purchaseDate: "2025-04-11",
  contact: "+2347056789012",
  propertiesType: "Flat",
  purchaseProperties: "Cedar Heights",
  status: "unpaid",
  email: "ngozi@example.com",
  amount: 60000,
},
{
  id: "cst007",
  customer: { name: "Olusegun Adegoke", imageUrl: "/avatar.png" },
  purchaseDate: "2025-06-01",
  contact: "+2348109876543",
  propertiesType: "Land",
  purchaseProperties: "Palm Island Estate",
  status: "paid",
  email: "david@example.com",
  amount: 35000,
},
{
  id: "cst008",
  customer: { name: "Uchechi Nnaji", imageUrl: "/avatar.png" },
  purchaseDate: "2025-05-26",
  contact: "+2349098765432",
  propertiesType: "House",
  purchaseProperties: "Royal Crest",
  status: "unpaid",
  email: "blessing@example.com",
  amount: 92000,
},
{
  id: "cst009",
  customer: { name: "Oluwatobi Ojo", imageUrl: "/avatar.png" },
  purchaseDate: "2025-05-14",
  contact: "+2347011223344",
  propertiesType: "Bungalow",
  purchaseProperties: "Greenfields",
  status: "paid",
  email: "samuel@example.com",
  amount: 70000,
},
{
  id: "cst010",
  customer: { name: "Aminatu Mohammed", imageUrl: "/avatar.png" },
  purchaseDate: "2025-06-06",
  contact: "+2348033344556",
  propertiesType: "Apartment",
  purchaseProperties: "Ocean View Homes",
  status: "unpaid",
  email: "aisha@example.com",
  amount: 56000,
}]
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
    <div className='w-full h-60 mt-4 rounded-lg'>
    <DataTable columns={columns} tableData={tableData} heading= "All Order List" filter=""/>
    </div>
    </div>
  )
}
