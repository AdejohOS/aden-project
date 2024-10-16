"use client";

import { useRouter } from "next/navigation";

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
    href: "/event",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
];

const MobileNavLinks = ({ ...restProps }) => {
  const router = useRouter();

  return (
    <div className="mt-8 w-full space-y-4">
      {links.map((link) => (
        <button
          key={link.href}
          onClick={() => router.push(link.href)}
          {...restProps}
          className="w-full bg-gray-50 hover:bg-gray-100  drop-shadow-sm px-2 py-2 rounded-md font-semibold"
        >
          {link.title}
        </button>
      ))}
    </div>
  );
};

export default MobileNavLinks;
