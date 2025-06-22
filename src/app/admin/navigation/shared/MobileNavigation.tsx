'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import {Home,HousePlus,
    Sparkles,
     FileChartColumn,
     User
     } from 'lucide-react'


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

export default function MobileNavigation(){
 const pathname = usePathname()  
 const adminUrl = "/admin"
    return(
        <>
         {/* Mobile navigation */}
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
         </div>
        </>
    )
}