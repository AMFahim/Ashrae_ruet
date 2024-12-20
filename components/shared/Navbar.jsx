"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { MdOutlineNotificationAdd } from "react-icons/md";


const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="sticky top-0 z-50 ">
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
          <Link href={"/"}>
            <Image
              src={"/ashrae-logo.png"}
              width={100}
              height={100}
              alt="Ashrae logo"
            />
          </Link>
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
              <Link href={"/membership"}>Membership</Link>
            </li>
            <li>
              <Link href={"/gallery"}>Gallery</Link>
            </li>
            <li>
              <Link href={"/blogs"}>Blogs</Link>
            </li>
            {/* <li ref={dropdownRef} className="relative">
              <button
                onClick={handleDropdownToggle}
                className="btn btn-ghost -mt-1"
              >
                More
              </button>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md p-2">
                  <li>
                    <Link href={"/membership"}>Membership</Link>
                  </li>
                  <li>
                    <Link href={"/gallery"}>Gallery</Link>
                  </li>
                  <li>
                    <Link href={"/blogs"}>Blog</Link>
                  </li>
                </ul>
              )}
            </li> */}
          </ul>
        </div>
        <div className="navbar-end">
          <Link href={"/newsupdates"} className="btn">
          <MdOutlineNotificationAdd className="text-2xl"/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
