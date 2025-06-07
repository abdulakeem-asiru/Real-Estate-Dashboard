import React from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import {DropdownMenuComponent} from './ProfileMenu'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function Profile() {
  const supabase = await createClient()
  const { data :authData, error: authError } = await supabase.auth.getUser()
  if (authError || !authData?.user) {
    redirect('/auth/login')
  }
  const {data :userData, error : userError} = await supabase
    .from('profiles')
    .select('*')
    .eq('id', authData.user.id)
    .single();

     if (userError) {
    console.error("user fetch failed:", userError.message); // or to an onboarding page
  }

  return (
    <div className='flex items-center gap-4'>
      <div className='rounded-full w-15 h-15 overflow-hidden'>
        <DropdownMenuComponent trigger={ <Image src="/avatar.png" alt='profilepic' width={60} height={60} 
         className='object-cover'/>}/>
      </div>
      <div className=' max-lg:hidden'>
        <p className='font-medium text-[18px] text-[var(--text-primary)]'>{userData?.name}</p>
        <p className='text-[14px] text-[var(--text-secondary)]'>{userData?.email}</p>
      </div>
      <div className='text-[var(--text-secondary)] max-lg:hidden'>
        <DropdownMenuComponent trigger ={ <ChevronDown />} />
      </div>
    </div>
  )
}

