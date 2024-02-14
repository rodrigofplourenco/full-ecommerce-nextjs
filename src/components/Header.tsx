"use client";
import Link from "next/link";
import { useState } from "react";
import { links } from "@/data/links";
import { FaCartShopping } from "react-icons/fa6";
import { ILink } from "@/models/ILink";
import { useCartStore } from "@/store/zustand";

export function Header() {
  const [active, setActive] = useState(links[0].path);
  const { cart } = useCartStore();

  const handleChange = (link: ILink) => {
    setActive(link.path);
  };

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl">eCommerce</span>
        </Link>

        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => handleChange(link)}
                className={`mr-5 hover:text-gray-900 cursor-pointer flex items-center gap-2 ${
                  active === link.path && "text-gray-900"
                }`}
              >
                <Icon />
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/cart"
          className="inline-flex items-center gap-2 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        >
          Cart <span className="text-secondaryBlue">({cart?.length ?? 0})</span>
          <FaCartShopping />
        </Link>
      </div>
    </header>
  );
}
