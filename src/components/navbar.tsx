import Logo from "./logo";
import MobileMenu from "./mobile-menu";
import NavLinks from "./nav-links";

const Navbar = () => {
  return (
    <header className="bg-gray-50 h-16 drop-shadow-sm fixed z-50 top-0 w-full flex items-center justify-center px-4">
      <nav className="container flex items-center justify-between">
        <Logo />
        <NavLinks />
        <MobileMenu />
      </nav>
    </header>
  );
};

export default Navbar;
