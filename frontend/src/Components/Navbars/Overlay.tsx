interface Props {
    isNavbarVisible:Boolean
    onClick:() => void
}

const Overlay = (props: Props) => {
    return (
        <button
        className={`overlay ${
          props.isNavbarVisible ? "show-overlay" : "hide-overlay"
        }`}
        onClick={props.onClick}
      />
    )
}

export default Overlay