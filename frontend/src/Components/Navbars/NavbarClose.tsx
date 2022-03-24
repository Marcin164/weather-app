interface Props {
    onClick?: () => void
    className?: string
}

const NavbarClose = (props: Props) => {
  return (
    <button className={`navbar-close ${props.className}`} onClick={props.onClick}>
      <img src="/images/Close.svg" alt="Close"/>
    </button>
  );
};

export default NavbarClose;