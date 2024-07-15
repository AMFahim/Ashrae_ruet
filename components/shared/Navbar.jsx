import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-md">
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

              {/* <li>
                <Link>Parent</Link>
                <ul className="p-2">
                  <li>
                    <Link>Submenu 1</Link>
                  </li>
                  <li>
                    <Link>Submenu 2</Link>
                  </li>
                </ul>
              </li> */}
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
                    <Link href={"/resources"}>Resources</Link>
                  </li>
                  <li>
                    <Link href={"/gallery"}>Gallery</Link>
                  </li>
                  <li>
                    <Link href={"/blog"}>Blog</Link>
                  </li>
                  <li>
                    <Link href={"/faq"}>FAQ</Link>
                  </li>
                    <li>
                        <Link href={"/contact"}>Contact Us</Link>
                    </li>
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
