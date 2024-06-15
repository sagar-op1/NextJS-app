import React from "react";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Image src="/DesignAgencyLogo.svg" alt="Logo" width={144} height={60} />
      <ul className="nav-links">
        <li>
          <Link href="/">Services</Link>
        </li>
        <li>
          <Link href="/">About Us</Link>
        </li>
        <li>
          <Link href="/">Contact Us</Link>
        </li>
        <li>
          <Link href="/" className="login-button">Login</Link>
        </li>
        <li>
          <Link href="/" className="register-button">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
