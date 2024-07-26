import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50">
      <div className="navbar bg-transparent shadow-md backdrop-blur-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href={"/about"}>About Us</Link>
              </li>
              <li>
                <Link href={"/events"}>Events</Link>
              </li>
            </ul>
          </div>
          <Link href={"/"} className="btn btn-ghost text-xl">Ashrae</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={"/about"}>About Us</Link>
            </li>
            <li>
              <Link href={"/events"}>Events</Link>
            </li>
            <li>
              <details>
                <summary>More</summary>
                <ul className="p-2">
                  <li>
                    <Link href={"/membership"}>Membership</Link>
                  </li>
                  <li>
                    <Link href={"/gallery"}>Gallery</Link>
                  </li>
                  <li>
                    <Link href={"/blogs"}>Blog</Link>
                  </li>
                  {/* <li>
                    <Link href={"/contact"}>Contact Us</Link>
                  </li> */}
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link href={"/newsupdates"} className="btn">News and updates</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
