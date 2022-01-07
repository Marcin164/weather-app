import React from "react";

interface Props {
  title: string;
}

const CardHeader = (props: Props) => {
  return (
    <div>
      <div className="header">{props.title}</div>
    </div>
  );
};

export default CardHeader;