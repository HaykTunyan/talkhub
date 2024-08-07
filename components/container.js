import React from "react";

const Container = (props) => {
  /**
   *  Container Hooks.
   */

  return (
    <div
      className={`container p-5 mx-auto pt-36 xl:px-0 ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}

export default Container;