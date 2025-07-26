import React from "react";

function MenuListItem(props) {
  const { title, href, children } = props;

  return (
    <li className="menu-list__item">
      <a
        href={href}
        className="menu-list__item-link flex items-center justify-center capitalize font-light"
      >
        {title}
        {children}
      </a>
    </li>
  );
}

export default MenuListItem;
