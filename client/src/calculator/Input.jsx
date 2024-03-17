// eslint-disable-next-line no-unused-vars
import React from "react";

import shortid from "shortid";
import "../style/Input.css";

// key for Put Cursor focus at End of Input
export default function Value(props) {
  return (
    <input
      autoFocus
      key={shortid.generate()}
      id="display"
      type="text"
      value={props.value}
      readOnly
    />
  );
}
