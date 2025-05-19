import { Button } from '@/components/ui/button'
import React from 'react'
import { Plus } from 'lucide-react'
import CardWrapper from '../parts/dashboard/Card'

const page = () => {
  return (
    <div className='m-auto max-w-8xl'>
     <div className='md:flex items-center justify-between hidden'>
      <div className='w-full'>
        <h2 className='text-[24px] font-medium text-[var(--text-primary)] mb-1'>Dashboard</h2>
        <p className='text-[16px] font-[500] text-[var(--text-secondary)]  max-md:w-[300px]'>Welcome, Let’s dive into your personalized setup guide.</p>
      </div>
      <Button className='bg-[var(--primary-color)] p-5'><span><Plus /></span><span className='hidden md:block'>Add Property</span></Button>
     </div>
     <div className='md:mt-4 mt-2'>
      <CardWrapper />
     </div>
    </div>
  )
}

export default page
