'use client'
import {LayoutGrid, Home,HousePlus,
    Sparkles,Users, Inbox, Calendar,
     FileChartColumn, ArrowLeftRight, 
     CalendarCheck2, ClipboardList, Building2,
     User, Menu,
     Search,
     Bell
     } from 'lucide-react'
     import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';


const mainLinks = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutGrid },
  {
    name: 'Discover',
    href: '/dashboard/discover',
    icon: Sparkles,
  },
  { name: 'Property', href: '/dashboard/properties', icon: Building2 },
  { name: 'Agents', href: '/dashboard/agents', icon: Users },
  { name: 'Customer', href: '/dashboard/customers', icon: CalendarCheck2 },
  { name: 'Analytics', href: '/dashboard/analytics', icon: FileChartColumn },
  { name: 'Order', href: '/dashboard/order', icon: ClipboardList },
  { name: 'Transaction', href: '/dashboard/transaction', icon: ArrowLeftRight },
];


const appLinks = [
    { name: 'Inbox', href: '/dashboard/inbox', icon: Inbox },
    { name: 'Calendar', href: '/dashboard/calendar', icon: Calendar }
]

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
export default function NavLink(){
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
            href={link.href}
            className={clsx( "flex h-[40px] text-[#727272] hover:text-black  pl-3 items-center gap-2 text-[16px]",
             {"text-[var(--text-primary)] border-[var(--border-color)] border-2 rounded-xl font-medium": pathname === link.href,},
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
            className={clsx( "flex h-[40px] text-[#727272] hover:text-black  pl-3 items-center gap-2 text-[16px]",
             {"text-[var(--text-primary)]  border-[var(--border-color)] border-2 rounded-lg font-medium": pathname === link.href,},
        )}
            >
             <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
            </Link>)
        })}
        </nav>
         </div>


        {/* Mobile Header */}
        <div className='flex justify-between items-center pb-4 md:hidden border-b-2 
            border-[var(--border-color)]'>
            <div className='flex gap-2'><Menu className='text-[var(--icon-secondary)]'/><span className='font-medium'>Dashboard</span></div>
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