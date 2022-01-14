import React, { useContext } from "react";
import {GetValuesContext} from "../../App"

interface Props {
  value:string
}

const NavbarTile = (props: Props) => {
  const listener:any = useContext(GetValuesContext)
  return (
    <button className="navbar-tile" onClick={listener} value={props.value}>
      {props.value}
    </button>
  );
};

export default NavbarTile;