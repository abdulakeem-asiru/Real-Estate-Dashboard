import { ReactNode } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Logo from "./logo";
import MobileNavLink from "./MobileNavLink";
import ThemeToggle from "./ThemeToggle";

interface MobileSideNavProp {
  Hambuger?: ReactNode; 
}
export function MobileSideNav({Hambuger} : MobileSideNavProp) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {Hambuger}
      </SheetTrigger>
      <SheetContent side="left" className="overflow-y-scroll srollbar-hide">
        <SheetHeader>
          
          <SheetTitle><Logo style="flex flex-row gap-2 items-center leading-none text-[24px]" width={40} height={40}/></SheetTitle>
          <SheetDescription>
            Your one stop platform for all Real Estate 
          </SheetDescription>
        </SheetHeader>
      <MobileNavLink />
        <SheetFooter>
          <SheetClose >
            <ThemeToggle />
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
