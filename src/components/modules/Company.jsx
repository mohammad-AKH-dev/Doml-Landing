import React from "react";

function Company(props) {
  const { path, title , darkPath} = props;

  return (
    <div className={`company mx-auto`}>
      <img src={path} alt={title} className="w-full h-full object-contain"/>
    </div>
  );
}

export default Company;
