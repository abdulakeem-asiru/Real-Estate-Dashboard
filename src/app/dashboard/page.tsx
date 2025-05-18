import { Button } from '@/components/ui/button'
import React from 'react'
import { Plus } from 'lucide-react'

const page = () => {
  return (
    <div>
     <div className='flex items-center justify-between'>
      <div>
        <h2 className='text-[24px] font-medium text-[var(--text-primary)] mb-1'>Dashboard</h2>
        <p className='text-[16px] font-[500] text-[var(--text-secondary)]'>Welcome, Let’s dive into your personalized setup guide.</p>
      </div>
      <Button className='bg-[var(--primary-color)] p-5'><span><Plus /></span><span className='hidden md:block'>Add Property</span></Button>
     </div>
    </div>
  )
}

export default page
