import React from "react";
const style = {
  width: "200px",
  height: "100px",
  border: "1px solid blue",
  textAlign: "center",
  lineHeight: "100px",
  cursor: "pointer",
};

const B = ({ onClick }) => {
  return (
    <div onClick={onClick} style={style}>
      compoent-B
    </div>
  );
};

export default B;
