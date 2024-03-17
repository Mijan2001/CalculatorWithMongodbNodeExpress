import React from "react";
import "../style/Button.css";
Button.defaultProps = {
  cls: "",
};
export default function Button(props) {
  return (
    <div className={"button noselect " + props.cls}>
      <button onClick={props.onClick}>{props.children}</button>
    </div>
  );
}
