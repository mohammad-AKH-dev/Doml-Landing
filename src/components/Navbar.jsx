import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoMdSunny } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import MenuListItem from "./modules/MenuListItem";
import { useTheme } from "../context/ThemeContext";
import { BsFillMoonStarsFill } from "react-icons/bs";

function Navbar() {
  const [search, setSearch] = useState("");
  const navRef = useRef(null);
  const [navRefClassNames, setNavRefClassNames] = useState(
    "pt-5 pb-10 lg:pt-3 lg:pb-7"
  );
  const theme = useTheme();
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

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, []);

  useEffect(() => {
    const setNavbarStyle = () => {
      if (window.scrollY > 150) {
        setNavRefClassNames("pt-7 pb-12");
      } else {
        setNavRefClassNames("pt-5 pb-10 lg:pt-3 lg:pb-7");
      }
    };

    window.addEventListener("scroll", setNavbarStyle);

    return () => removeEventListener("scroll", setNavbarStyle);
  }, []);

  return (
    <nav className="navbar fixed top-0 z-[999] left-0 bg-white dark:bg-[#000]">
      <div
        ref={navRef}
        className={`navbar-content container flex items-center transition-all justify-between mx-auto  ${navRefClassNames} `}
      >
        <div className="navbar-logo&menu__wrapper flex items-center gap-x-5">
          <a href="#" className="max-w-[101px]">
            <img
              src={
                theme.theme === "dark"
                  ? "/images/dark-logo.svg"
                  : "/images/logo.svg"
              }
            />
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
          {theme.theme === "dark" ? (
            <IoMdSunny
              className="text-[20px] 2xl:mr-2 cursor-pointer"
              onClick={() => theme.setTheme("light")}
            />
          ) : (
            <BsFillMoonStarsFill
              className="text-[20px] 2xl:mr-2 cursor-pointer"
              onClick={() => theme.setTheme("dark")}
            />
          )}
          <label htmlFor="my-drawer">
            <AiOutlineMenu className="text-[20px] block lg:hidden cursor-pointer" />
          </label>
          <div className="input-wrapper bg-[#272F43] hidden 2xl:flex items-center  px-4 py-1 rounded-md">
            <input
              type="text"
              className="font-title  text-white border-none outline-none"
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
            className="border-none cursor-pointer hidden lg:block px-6 py-2 font-light outline-none"
          >
            Sign in
          </button>
          <button
            type="button"
            className="border cursor-pointer px-6 hidden lg:block py-2 border-[#9e9c9c] rounded-md font-light outline-none"
          >
            Sign in
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
