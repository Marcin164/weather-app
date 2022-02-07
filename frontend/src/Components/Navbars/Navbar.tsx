interface Props {
    children: any
    className?: String
}

const Navbar = (props: Props) => {
    return (
        <div className={`navbar ${props.className}`}>
            {props.children}
        </div>
    )
}

export default Navbar
