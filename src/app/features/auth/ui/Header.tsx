'use client'
import React from 'react'
import Logo from '@/app/features/shared/logo'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

function Header() {
const router = useRouter()
  return (
    <header className='flex justify-between items-center'>
        <Logo style="flex flex-row gap-2 items-center leading-none text-[30px]" width={50} height={50} />
        <Button className='bg-transparent border-none cursor-pointer hover:bg-transparent hover:scale-[1.1] text-[16px] text-[var(--text-secondary)] shadow-none'
        onClick={() => {router.back()}}><ArrowLeft />Go Back</Button>
      </header>
  )
}

export default Header
