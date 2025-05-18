import React from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import {DropdownMenuComponent} from './ProfileMenu'


function Profile() {
  return (
    <div className='flex items-center gap-4'>
      <div className='rounded-full w-15 h-15 overflow-hidden'>
        <Image src="/avatar.png" alt='profilepic' width={60} height={60} 
         className='object-cover'/>
      </div>
      <div>
        <p className='font-medium text-[18px] text-[var(--text-primary)]'>Olawale Balogun</p>
        <p className='text-[14px] text-[var(--text-secondary)]'>edwards@gmail.com</p>
      </div>
      <div className='text-[var(--text-secondary)]'>
        <DropdownMenuComponent chevron ={ <ChevronDown />} />
      </div>
    </div>
  )
}

export default Profile
