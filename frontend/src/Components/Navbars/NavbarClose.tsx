interface Props {
    onClick: () => void
    className?: String
}

const NavbarClose = (props: Props) => {
  return (
    <button className={`navbar-close ${props.className}`} onClick={props.onClick}>
      X
    </button>
  );
};

export default NavbarClose;
