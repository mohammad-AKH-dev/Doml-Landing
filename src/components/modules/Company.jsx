import React from "react";
import { useTheme } from "../../context/ThemeContext";

function Company(props) {
  const { path, title, darkPath } = props;
  const themeContext = useTheme();

  return (
    <div className={`company mx-auto`}>
      <img
        src={darkPath && themeContext.theme === "dark" ? darkPath : path}
        alt={title}
        className="w-full h-full object-contain"
      />
    </div>
  );
}

export default Company;
