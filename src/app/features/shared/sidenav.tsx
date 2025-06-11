import NavLinkComponent from '@/app/features/shared/nav-links';
import Logo from "./logo";
import MobileHeader from './MobileHeader';
import ThemeToggle from './ThemeToggle';

export default function SideNav(){
    return(
        <aside className="flex h-full flex-col max-md:hidden px-4 py-4 md:px-3 border-r-2 border-[#E0E0E0] overflow-y-scroll scrollbar-hide ">
            <div className="">
            <div className="w-32 text-white md:w-40 mb-10 hidden md:block">
          <Logo style="flex flex-row gap-2 items-center leading-none text-[24px]" width={40} height={40}/>
         </div>
            <NavLinkComponent />
            <MobileHeader />
            </div>
            <div className='flex-1 mb-10'></div>
            <div className='max-md:hidden'>
            <ThemeToggle />
            </div>
            
        </aside>
    )
}