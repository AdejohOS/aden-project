import MobileNavLinks from "./mobile-nav-links";
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className=" md:hidden">
        <Button variant="secondary" size="icon" className="rounded-full">
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetClose asChild>
          <MobileNavLinks />
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
