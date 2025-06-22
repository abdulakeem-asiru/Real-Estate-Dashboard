'use client'
import {Menu,
     Search,
     Bell
     } from 'lucide-react'
     
import { MobileSideNav } from './MobileSideNav';
import { PopoverComponent } from './Notification';



export default function MobileHeader(){
    return(
        <>
        {/* Mobile Header */}
        <div className='flex justify-between items-center flex-1 p-4 md:hidden border-b-2
            border-[var(--border-color)] bg-[var(--background)] z-10'>
            <div className='flex gap-2'><MobileSideNav Hambuger={<Menu className='text-[var(--icon-secondary)]'/>}/><span className='font-medium'>Dashboard</span></div>
            <div className='flex items-center justify-center gap-6'>
            <Search className='text-[var(--icon-secondary)]'/>
              <PopoverComponent BellIcon={ <Bell className='text-[var(--icon-secondary)]'/>} />
            </div>
        </div>

         {/* Mobile navigation
        <div className='md:hidden flex h-[100px] items-center justify-center p-4 w-full fixed bottom-0
         left-0 border-t-1 border-[var(--border-color)] bg-[var(--background)] z-10'>
       {mobileLinks.map((link) => {
        const LinkIcon = link.icon;
        return(
        <Link key={link.name}
             href={adminUrl+link.href}
            className={clsx( "flex flex-col md:flex-row h-[48px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] items-center justify-center w-full",
             {"text-[var(--primary-color)]  ": pathname === adminUrl+link.href,},
        )}
            >
             <LinkIcon className={clsx("w-8 h-7", {"text-[var(--primary-color)]" : pathname === link.href})}  />
            <p className="max-sm:hidden">{link.name}</p>
            </Link>)
        })}
         </div> */}
        </>
    )
}