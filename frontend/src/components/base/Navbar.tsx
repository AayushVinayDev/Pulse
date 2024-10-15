"use client";
import React, { useState } from "react";
import Link from "next/link";
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";
import { Button } from "../ui/button";
import LoginModal from "../auth/LoginModal";
import { X } from "lucide-react";

import MainButton from "../common/MainButton";
import { RainbowButton } from "../ui/rainbow-button";
export default function Navbar({ user }: { user: CustomUser | null }) {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  // return (
  //   <nav className="p-6 flex justify-between items-center bg-white shadow-sm">
  //     <h1 className="text-xl md:text-2xl font-extrabold">Pulse</h1>
  //     <div className="flex items-center space-x-2 md:space-x-6 text-gray-700">
  //       <Link href="/">Home</Link>
  //       <Link href="#features">Features</Link>
  //       <Link href="#reviews">Reviews</Link>
  //       <Link href="#contact">Contact</Link>
  //       {!user ? (
  //         <LoginModal />
  //       ) : (
  //         <Link href="/dashboard">
  //           <Button>Dashboard</Button>
  //         </Link>
  //       )}
  //     </div>
  //   </nav>
  // );

  const links = [
    {
      route: "#features",
      name: "Features",
      badgeCount: 0,
    },
    {
      route: "#reviews",
      name: "Reviews",
      badgeCount: 0,
    },
    {
      route: "#contact",
      name: "Contact",
      badgeCount: 0,
    },
  ];

  return (
    <div className="md:sticky md:top-0 md:shadow-none z-20 mt-[5rem] md:mt-0">
      {/* DESKTOP */}
      <div className=" hidden lg:block animate-in fade-in zoom-in bg-white p-4">
        <div className="flex justify-between mx-4 items-center">
          <Link href="/">
            <div className="h-8 w-8 cursor-pointer">
              <img src="/images/logo_fin.svg" alt="logo" className="h-full w-full" />
            </div>
          </Link>
          <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none">
            {links.map((item, index) => (
              <Link key={index} href={item.route}>
                <p
                  className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
                >
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-[20px] select-none">
            {/* <MainButton
              text="Sign in"
              width="contain"
              className="bg-white border text-[#31373D] border-[#EDEEF0] hover:bg-white"
            /> */}
            {!user ? (
              <LoginModal />
            ) : (
              <Link href="/dashboard">
                <RainbowButton>Dashboard</RainbowButton>
              </Link>
            )}

            {/* <MainButton text="Start for free" width="contain" /> */}
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={` block lg:hidden shadow-sm  fixed top-0 w-full z-[999] bg-white py-4 animate-in fade-in zoom-in  ${
          menu ? " bg-primary py-2" : ""
        } `}
      >
        <div className="flex justify-between mx-[10px]">
          <div className="flex gap-[50px] text-[16px] items-center select-none">
            <img src="/images/logo_fin.svg" alt="logo" />
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="cursor-pointer animate-in fade-in zoom-in text-black"
                onClick={toggleMenu}
              />
            ) : (
              <img
                src="/images/menu.svg"
                alt="logo"
                className="cursor-pointer animate-in fade-in zoom-in"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>

        <div
          className={`z-10 bg-white w-full mx-auto shadow-sm animate-in slide-in-from-right-0 transition-all duration-300 ease-in-out  ${
            menu ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col gap-8 mt-8 mx-4">
            {links.map((item, index) => (
              <Link key={index} href={item.route}>
                <p
                  className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
                >
                  {item.name}
                </p>
              </Link>
            ))}

            <div className="flex flex-col gap-[20px] select-none">
              {/* <MainButton
                text="Sign in"
                width="contain"
                className="bg-white text-[#31373D] border-[#EDEEF0] hover:bg-white"
              /> */}
              {!user ? (
                <LoginModal />
              ) : (
                <Link href="/dashboard">
                  <RainbowButton>Dashboard</RainbowButton>
                </Link>
              )}

              {/* <MainButton text="Start for free" width="contain" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>  );
}

