import React from "react";

const A = ({ children }) => {
  const onClick = (index) => console.log("clicked on index: ", index);

  const finalChildren = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { onClick: () => onClick(index) });
    }
    return child;
  });

  return <div>{finalChildren}</div>;
};

export default A;
