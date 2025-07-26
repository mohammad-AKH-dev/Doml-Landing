import React from "react";

function MenuListItem(props) {
  const { title, href, children , customStyle , linkStyle} = props;

  return (
    <li className={`menu-list__item ${customStyle}`}>
      <a
        href={href}
        className={`menu-list__item-link flex items-center ${linkStyle ? linkStyle : 'justify-center'} capitalize font-light`}
      >
        {title}
        {children}
      </a>
    </li>
  );
}

export default MenuListItem;
