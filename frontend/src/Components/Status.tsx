import React from "react"

interface Props {
  img: string;
  header: string;
  text: string;
}

const Status = (props:Props) => {
  return (
    <div className="status">
      <img src={props.img} alt="img" className="status--img" />
      <div className="status--div">
        <h2 className="status--h2">{props.header}</h2>
        <p className="status--p">{props.text}</p>
      </div>
    </div>
  );
};

export default Status
