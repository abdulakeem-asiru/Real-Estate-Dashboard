'use client'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import CardWrapper from './ui/PropertyCard'
import { DataTable } from './propertyTable/data-table'
import { columns, Orders } from './propertyTable/columns'
import { CustomersOrder } from '../../data/order'

async function getData(): Promise<Orders[]> {
  // Fetch data from your API here.
 return CustomersOrder
}

function Page() {
  const [data, setData] = useState<Orders[]>([]); // State to hold data
  
    useEffect(() => {
      async function fetchData() {
        const result = await getData();
        setData(result);
      }
      fetchData();
    }, []);
  
  const pathName = usePathname()
  const pageTitle = pathName.split("dashboard")[1].split('/')[1]
  return (
    <div className='m-auto w-full mb-30  md:p-8 p-6'>
      <div className='md:flex items-end justify-between hidden mb-6'>
      <div className='w-full'>
        <h2 className='text-[24px] font-medium text-[var(--text-primary)] mb-1 capitalize'>{pageTitle}</h2>
      </div>
      <Button className='bg-[var(--primary-color)] cursor-pointer
      py-5 px-6 text-white hover:bg-[var(--primary-color)]'><span><Plus /></span><span className='hidden md:block '>Add Property</span> </Button>
     </div>
     <div>
      <CardWrapper />
     </div>
     <div className="w-full mx-auto py-4 ">
           <DataTable columns={columns} tableData={data} heading="Properties List" filter = ""/>
           </div>
    </div>
  )
}

export default Page
