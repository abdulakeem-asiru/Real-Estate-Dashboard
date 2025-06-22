'use client'
import {LayoutGrid,
    Sparkles,Users, Inbox, Calendar,
     FileChartColumn, ArrowLeftRight, 
     CalendarCheck2, ClipboardList, Building2
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
  { name: 'Agents', href: '/dashboard/agents', icon: Users },
  { name: 'Customer', href: '/dashboard/customers', icon: CalendarCheck2 },
  { name: 'Analytics', href: '/dashboard/analytics', icon: FileChartColumn },
  { name: 'Transaction', href: '/dashboard/transaction', icon: ArrowLeftRight },
];


const appLinks = [
    { name: 'Inbox', href: '/dashboard/inbox', icon: Inbox },
    { name: 'Calendar', href: '/dashboard/calendar', icon: Calendar }
]

const adminUrl = "/admin"

export default function MobileNavLink(){
    const pathname = usePathname();
    return(
        <>
         {/* Main navigation */}
        <div className='mb-4'>
        <p className='text-[14px] text-[var(--text-primary)] font-medium mb-3 ml-3'>MAIN</p>
        <nav className='flex flex-col gap-2'>
       {mainLinks.map((link) => {
        const LinkIcon = link.icon;
        return(
        <Link key={link.name}
            href={adminUrl+link.href}
            className={clsx( "flex h-[40px] text-[#727272] hover:text-black  pl-3 items-center gap-2 text-[16px]",
             {"text-[var(--text-primary)] border-[var(--border-color)] border-2 rounded-xl font-medium": pathname === adminUrl+link.href,},
        )}
            >
             <LinkIcon className="w-6" />
            <p className="">{link.name}</p>
            </Link>)
        })}
         </nav>
         </div>
         
         {/* App navigation */}
         <div className=''>
       <p className='text-[14px] text-[var(--text-primary)] font-medium ml-3 mb-3'>APPS</p>
       <nav className='flex flex-col gap-2'>
        {appLinks.map((link) => {
        const LinkIcon = link.icon;
        return(
        <Link key={link.name}
            href={adminUrl+link.href}
            className={clsx( "flex h-[40px] text-[#727272] hover:text-black  pl-3 items-center gap-2 text-[16px]",
             {"text-[var(--text-primary)]  border-[var(--border-color)] border-2 rounded-lg font-medium": pathname === adminUrl+link.href,},
        )}
            >
             <LinkIcon className="w-6" />
            <p className="">{link.name}</p>
            </Link>)
        })}
        </nav>
         </div>

   
        </>
    )
}