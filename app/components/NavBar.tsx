import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa"; // Importing another icon for example
import MenuItem from "./MenuItem";

const NavBar = () => {
  const serviceItems = [
    { label: "Web Development", href: "/web-development" },
    { label: "App Development", href: "/app-development" },

    // Add more service items here
  ];

  return (
    <nav className="navbar-custom">
      <div className="flex items-center space-x-4 ">
        <Image src="/Frame 8.svg" alt="" width={144} height={60} />
      </div>
      <ul className="flex space-x-4">
        <li>
          <MenuItem text="Services" dropIcon={true} items={serviceItems} />
        </li>
        <li>
          <Link
            href="/about"
            className="flex items-center space-x-2 p-2 text-lg font-medium  text-gray-700 hover:text-gray-900"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="flex items-center space-x-2 p-2 text-lg font-medium text-gray-700 hover:text-gray-900"
          >
            Contact Us
          </Link>
        </li>

        <li>
          <Link
            href="/login"
            className="flex items-center space-x-2 p-2 text-lg font-medium text-gray-700 hover:text-gray-900  border border-green rounded px-4 py-2"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            href="/register"
            className="flex items-center space-x-2 p-2 text-lg font-medium text-gray-700 hover:text-gray-900  border border-gray-700 rounded px-4 py-2  bg-green-500 hover:bg-green-600 text-white"
          >
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
