"use client";

import Link from "next/link";

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Media",
    href: "/media",
  },
  {
    title: "Events",
    href: "/events",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
];

const MobileNavLinks = ({ ...restProps }) => {
  return (
    <div className="mt-8 w-full space-y-4">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          {...restProps}
          className="w-full flex flex-col text-center bg-gray-50 hover:bg-gray-100  drop-shadow-sm px-2 py-2 rounded-md font-semibold"
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default MobileNavLinks;
