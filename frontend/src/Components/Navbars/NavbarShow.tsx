import React from "react";

interface Props {
    onClick?: () => any
    className?: String
}

const NavbarShow = (props: Props) => {
  return (
    <button className={`show-navbar ${props.className}`} onClick={props.onClick}>
      <img src="" alt="" className=""/>
    </button>
  );
};

export default NavbarShow;
