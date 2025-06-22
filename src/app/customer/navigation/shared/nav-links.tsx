'use client'
import {LayoutGrid, 
    Sparkles, Inbox, Calendar,
     FileChartColumn, ClipboardList, Building2,
    
     } from 'lucide-react'
     import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';


const mainLinks = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutGrid },
  { name: 'Property', href: '/dashboard/properties', icon: Building2 },
   {
    name: 'Discover',
    href: '/dashboard/discover',
    icon: Sparkles,
  },
  { name: 'Orders', href: '/dashboard/orders', icon: ClipboardList },
  { name: 'Analytics', href: '/dashboard/analytics', icon: FileChartColumn },
];


const appLinks = [
    { name: 'Inbox', href: '/dashboard/inbox', icon: Inbox },
    { name: 'Calendar', href: '/dashboard/calendar', icon: Calendar }
]
const customerUrl = "/customer"

export default function NavLinkComponent(){
    const pathname = usePathname();
    return(
        <>
         {/* Main navigation */}
        <div className='hidden md:block mb-4'>
        <p className='text-[14px] text-[var(--text-primary)] font-medium mb-3 ml-3'>MAIN</p>
        <nav className='flex flex-col gap-2'>
       {mainLinks.map((link) => {
        const LinkIcon = link.icon;
        return(
        <Link key={link.name}
            href={customerUrl+link.href}
            className={clsx( "flex h-[40px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] pl-3 items-center gap-2 text-[16px]",
             {"text-[var(--text-primary)] border-[var(--border-color)] border-2 rounded-xl font-medium": pathname === customerUrl+link.href,},
        )}
            >
             <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
            </Link>)
        })}
         </nav>
         </div>
         
         {/* App navigation */}
         <div className='hidden md:block'>
       <p className='text-[14px] text-[var(--text-primary)] font-medium ml-3 mb-3'>APPS</p>
       <nav className='flex flex-col gap-2'>
        {appLinks.map((link) => {
        const LinkIcon = link.icon;
        return(
        <Link key={link.name}
            href={link.href}
            className={clsx( "flex h-[40px] text-[var(--text-secondary)] hover:text-[var(--text-primary)]  pl-3 items-center gap-2 text-[16px]",
             {"text-[var(--text-primary)]  border-[var(--border-color)] border-2 rounded-lg font-medium": pathname === link.href,},
        )}
            >
             <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
            </Link>)
        })}
        </nav>
         </div>
        </>
    )
}