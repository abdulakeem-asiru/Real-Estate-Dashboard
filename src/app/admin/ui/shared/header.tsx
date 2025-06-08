import React from 'react'
import SearchComponent from './search'
import Profile from './Profile'
import { MessageSquareText, BellDot } from 'lucide-react'
import { PopoverComponent } from './Notification'
import {MessagePopoverComponent} from './MessageNotification'

const HeaderComponent = () => {
  return (
    <div className='flex w-full justify-between items-center'>
      <SearchComponent />
      <div className='flex items-center gap-6'>
        <div className='flex gap-6 items-center text-[var(--text-secondary)]'>
          <MessagePopoverComponent MessageIcon ={<MessageSquareText />}/>
          <PopoverComponent BellIcon ={<BellDot />}/>
        </div>
        <Profile />
      </div>
    </div>
  )
}

export default HeaderComponent
