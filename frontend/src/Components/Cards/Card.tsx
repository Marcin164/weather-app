import Header from "../Header"

interface Props {
    title:string
    children?: React.ReactChild | React.ReactNode
    className?:string
}

const Card = (props: Props) => {
    return (
        <div className={`card ${props.className}`}>
            <Header title={props.title}/>
            {props.children}
        </div>
    )
}

export default Card
