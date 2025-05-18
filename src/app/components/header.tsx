import React from 'react'
import SearchComponent from './search'
import Profile from './Profile'
import { MessageSquareText, BellDot } from 'lucide-react'

const HeaderComponent = () => {
  return (
    <div className='flex w-full justify-between items-center'>
      <SearchComponent />
      <div className='flex items-center gap-6'>
        <div className='flex gap-6 items-center text-[var(--text-secondary)]'>
          <MessageSquareText />
          <BellDot />
        </div>
        <Profile />
      </div>
    </div>
  )
}

export default HeaderComponent
