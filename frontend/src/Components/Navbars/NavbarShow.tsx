interface Props {
    onClick?: () => void
    className?:string
}

const NavbarShow = (props: Props) => {
  return (
    <button className={`show-navbar ${props.className}`} onClick={props.onClick}>
      <img src="" alt="" className=""/>
    </button>
  );
};

export default NavbarShow;
