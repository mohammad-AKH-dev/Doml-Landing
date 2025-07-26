import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Button(props) {
  const { title } = props;

  return (
    <button
      type="button"
      className="button cursor-pointer outline-none transition-all group duration-150 rounded-full mt-5 p-2 px-10 lg:px-5 2xl:px-10"
    >
      <div className="rounded-l-[14px] rounded-r-[14px] tracking-wider group-hover:tracking-widest transition-all flex items-center gap-x-4">
        <span>{title}</span>
        <FaArrowRightLong className="group-hover:translate-x-1 transition-all"/>
      </div>
    </button>
  );
}

export default Button;
