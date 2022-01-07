import React from 'react'
import Header from "./Header"

interface Props {
    title:any
    children:any
    className:string
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
