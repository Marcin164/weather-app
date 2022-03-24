interface Props {
    onClick?: () => void
    className?:string
    image?:string
}

const NavbarShow = (props: Props) => {
  return (
    <button className={`show-navbar ${props.className}`} onClick={props.onClick}>
      <img src={`/images/${props.image}.svg`} alt={props.image} className=""/>
    </button>
  );
};

export default NavbarShow;