import { Button } from "@/components/ui/button"
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
          
          <SheetTitle><Logo /></SheetTitle>
          <SheetDescription>
            Your one stop platform for all Real Estate 
          </SheetDescription>
        </SheetHeader>
      <MobileNavLink />
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
