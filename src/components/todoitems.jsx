import React, { useState } from "react";

function Todoitem(props) {
  return (
    <div
      onClick={() => {
        props.onchecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default Todoitem;
