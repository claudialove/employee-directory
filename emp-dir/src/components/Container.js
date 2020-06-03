//require statements
import React from "react";


//function that returns properties
function Container(props) {
  return <div className={`container${props.fluid ? "-fluid" : ""}`}>{props.children}</div>;
}

//exporting allows reuse
export default Container;