import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import MenuListItem from "./MenuListItem";

function Sidebar() {
  const [search,setSearch] = useState('')
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
    <div className="drawer-end ">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{/* Page content here */}</div>
      <div className="drawer-side z-[9999]">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay  "
        ></label>
        <ul className="menu bg-base-200 text-end text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <img src="/images/dark-logo.svg" className="mt-2" />
          <div className="content mt-4 flex flex-col items-center gap-y-4 justify-end">
            {menus.map((menu) => (
              <MenuListItem
                linkStyle={"justify-end text-[17px]"}
                customStyle={"w-full"}
                key={menu.id}
                href={menu.href}
                title={menu.title}
              >
                {menu.icon}
              </MenuListItem>
            ))}
          </div>
          <div className="input-wrapper bg-[#272F43] flex mt-4 justify-between items-center  px-4 py-1 rounded-md">
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
            className="border-none cursor-pointer mt-4 px-6 py-2 font-light outline-none"
          >
            Sign in
          </button>
          <button
            type="button"
            className="border cursor-pointer px-6 mt-4 py-2 border-[#9e9c9c] rounded-md font-light outline-none"
          >
            Sign in
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
