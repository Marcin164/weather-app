interface Props {
    children?: React.ReactChild | React.ReactNode
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
