import React, { useState } from "react";

const Table = () => {
  const [showHide, setShowHide] = useState(true);
  const handleClick = () => {
    setShowHide(!showHide);
    console.log("click");
  };
  return (
    <>
      <button onClick={handleClick}>Click </button>
      {showHide && (
        <div>
          <h1>hello world</h1>
          <h1>hello world</h1>
          <h1>hello world</h1>
         
        </div>
      )}
    </>
  );
};

export default Table;
