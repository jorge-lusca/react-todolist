import React from "react";
import Card from "./Card";

export default function Modal(props) {
  function hide(e) {
    let target = e.target;
    if (target.id === "Modal") {
      props.onHideModal();
    }
  }

  return (
    <div
      id="Modal"
      onClick={hide}
      className={props.show ? "Modal" : "Modal hideModal"}
    >
      <Card className="cardModal">{props.children}</Card>
    </div>
  );
}
