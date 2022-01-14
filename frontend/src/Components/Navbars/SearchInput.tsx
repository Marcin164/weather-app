import React from "react";

interface Props {
  getValue:(e:React.ChangeEvent<HTMLInputElement>) => void
}

const SearchInput = (props: Props) => {
  return (
    <div className="search-input-wrapper">
      <input placeholder="Search..." className="search-input" onChange={props.getValue}/>
    </div>
  );
};

export default SearchInput;
