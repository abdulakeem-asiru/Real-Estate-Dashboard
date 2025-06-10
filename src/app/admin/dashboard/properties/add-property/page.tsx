'use client'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React from 'react'

function Page() {
  const pathName = usePathname()
  const pageTitle = pathName.split("dashboard")[1].split('/')[1]
  return (
    <div className='m-auto w-full mb-30  md:p-8 p-6'>
      <div className='md:flex items-end justify-between hidden'>
      <div className='w-full'>
        <h2 className='text-[24px] font-medium text-[var(--text-primary)] mb-1 capitalize'>{pageTitle}</h2>
      </div>
      <Button className='bg-[var(--primary-color)] cursor-pointer
      py-5 px-6 text-white hover:bg-[var(--primary-color)]'><span><Plus /></span><span className='hidden md:block '>Add Property</span> </Button>
     </div>
    </div>
  )
}

export default Page
