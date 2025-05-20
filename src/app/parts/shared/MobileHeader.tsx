'use client'
import {Home,HousePlus,
    Sparkles,
     FileChartColumn,
     User, Menu,
     Search,
     Bell
     } from 'lucide-react'
     import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MobileSideNav } from './MobileSideNav';
import clsx from 'clsx';


const mobileLinks = [
  { name: 'Home', href: '/dashboard', icon:Home },
  {
    name: 'Discover',
    href: '/dashboard/discover',
    icon: Sparkles,
  },
  { name: 'Add Prop', href: '/dashboard/properties', icon: HousePlus },
  { name: 'Analytics', href: '/dashboard/analytics', icon: FileChartColumn },
  { name: 'Profile', href: '/dashboard/profile', icon: User },
];
export default function MobileHeader(){
    const pathname = usePathname();
    return(
        <>

        {/* Mobile Header */}
        <div className='flex justify-between items-center pb-4 md:hidden border-b-2 
            border-[var(--border-color)]'>
            <div className='flex gap-2'><MobileSideNav Hambuger={<Menu className='text-[var(--icon-secondary)]'/>}/><span className='font-medium'>Dashboard</span></div>
            <div className='flex items-center justify-center gap-6'>
            <Search className='text-[var(--icon-secondary)]'/>
            <Bell className='text-[var(--icon-secondary)]'/>
            </div>
        </div>

         {/* Mobile navigation */}
        <div className='md:hidden flex h-[100px] items-center justify-center p-4 w-full fixed bottom-0
         left-0 border-t-1 border-[var(--border-color)]'>
       {mobileLinks.map((link) => {
        const LinkIcon = link.icon;
        return(
        <Link key={link.name}
            href={link.href}
            className={clsx( "flex flex-col md:flex-row h-[48px] text-[#727272] hover:text-black items-center justify-center w-full",
             {"text-[var(--primary-color)] pl-3 ": pathname === link.href,},
        )}
            >
             <LinkIcon className="w-8" />
            <p className="max-sm:hidden">{link.name}</p>
            </Link>)
        })}
         </div>
        </>
    )
}