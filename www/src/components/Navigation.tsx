import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuClassName =
    "text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700";
  const menuToggledClassName =
    "text-white w-full text-left px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700";

  const menuList = (
    <>
      <li>
        <Link href="/">
          <button className={menuClassName}>Home</button>
        </Link>
      </li>
      <li>
        <Link href="/our-product">
          <button className={menuClassName}>Our Product</button>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <button className={menuClassName}>About Us</button>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <button className={menuClassName}>Contact Us</button>
        </Link>
      </li>
    </>
  );

  return (
    <nav className="bg-gray-800 p-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center ">
          <div className="flex-shrink-0">
            <div className="absolute top-4 left-6">
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="Security Spectrum Logo"
                  width={200}
                  height={50}
                />
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="absolute top-4 right-6">
              <ul className="flex space-x-4 ">
                {/* ...rest of your navigation links */}

                <div className="container mx-auto">
                  <ul className="flex justify-end space-x-4">{menuList}</ul>
                </div>
              </ul>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white inline-flex items-center justify-center p-0 rounded-md"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
          <ul className="mt-2 space-y-2">{menuList}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
