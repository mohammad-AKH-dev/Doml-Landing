import React, { useState } from "react";
import { IoIosArrowDown, IoMdSunny } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import MenuListItem from "./MenuListItem";

function Navbar() {
  const [search, setSearch] = useState("");
  const [menus, setMenus] = useState([
    {
      id: 1,
      title: "product",
      href: "#product",
      icon: <IoIosArrowDown className="translate-y-0.5" />,
    },
    { id: 2, title: "team", href: "#team" },
    { id: 3, title: "enterprice", href: "#enterprice" },
    {
      id: 4,
      title: "explore",
      href: "#explore",
      icon: <IoIosArrowDown className="translate-y-0.5" />,
    },
    { id: 5, title: "marketplace", href: "#marketplace" },
    { id: 6, title: "pricing", href: "#pricing" },
  ]);

  return (
    <nav className="navbar container flex items-center justify-between mx-auto pt-7">
      <div className="navbar-logo&menu__wrapper flex items-center gap-x-5">
        <a href="#" className="max-w-[101px]">
          <img src="/images/dark-logo.svg" />
        </a>
        <ul className="menu-list hidden lg:flex items-center gap-x-5">
          {menus.map((menu) => (
            <MenuListItem key={menu.id} href={menu.href} title={menu.title}>
              {menu.icon}
            </MenuListItem>
          ))}
        </ul>
      </div>
      <div className="navbar-search&auth__wrapper flex items-center gap-x-4 lg:gap-x-2">
        <IoMdSunny className="text-[20px] 2xl:mr-2 cursor-pointer" />
        <label htmlFor="my-drawer">
          <AiOutlineMenu className="text-[20px] block lg:hidden cursor-pointer" />
        </label>
        <div className="input-wrapper bg-[#272F43] hidden 2xl:flex items-center  px-4 py-1 rounded-md">
          <input
            type="text"
            className="font-title text-[#000] dark:text-white border-none outline-none"
            placeholder="Search DOML"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <div className="p-1 w-[20px] h-[20px] text-[12px] text-[#7a7d86] flex items-center justify-center border border-[#515868]">
            /
          </div>
        </div>
        <button
          type="button"
          className="border-none hidden lg:block px-6 py-2 font-light outline-none"
        >
          Sign in
        </button>
        <button
          type="button"
          className="border px-6 hidden lg:block py-2 border-[#9e9c9c] rounded-md font-light outline-none"
        >
          Sign in
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
