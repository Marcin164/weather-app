import React from "react";

interface Props {}

const SearchInput = (props: Props) => {
  return (
    <div className="search-input-wrapper">
      <input placeholder="Search..." className="search-input" />
    </div>
  );
};

export default SearchInput;
