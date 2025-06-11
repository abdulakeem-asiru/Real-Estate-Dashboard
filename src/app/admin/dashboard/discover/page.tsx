'use client'
import React from 'react'
import CardWrapper from './ui/ListingCard'
import { Button } from '@/components/ui/button'
import { Upload } from 'lucide-react'
import { usePathname } from 'next/navigation'


const Page = () => {
  const pathName = usePathname()
    const pageTitle = pathName.split("dashboard")[1].split('/')[1]
  return (
    <div className='py-4 max-md:px-3'>
       <div className='md:flex items-end justify-between hidden mb-6'>
      <div className='w-full'>
        <h2 className='text-[24px] font-medium text-[var(--text-primary)] mb-1 capitalize'>{pageTitle}</h2>
      </div>
      <Button className='bg-[var(--primary-color)] cursor-pointer
      py-5 px-6 text-white hover:bg-[var(--primary-color)]'><span><Upload /></span><span className='hidden md:block '>Export</span> </Button>
     </div>
      <CardWrapper />
    </div>
  )
}

export default Page
