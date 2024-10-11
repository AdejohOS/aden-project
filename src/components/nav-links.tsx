import Link from "next/link";

const NavLinks = () => {
  return (
    <ul className="hidden md:flex items-center gap-4">
      <Link href="/">Home</Link>
      <Link href="/about">About Us</Link>
      <Link href="/media">Media</Link>
      <Link href="/events">Events</Link>
      <Link href="/contact">Contact Us</Link>
    </ul>
  );
};

export default NavLinks;
