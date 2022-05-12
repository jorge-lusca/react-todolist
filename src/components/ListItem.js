import React from "react";
import Card from "./Card";

function DoneImg(props) {
  if (props.done) {
    return <img src="./assets/check.png" alt="done" />;
  } else {
    return <img src="./assets/dry-clean.png" alt="undone" />;
  }
}

export default function ListItem(props) {
  return (
    <li>
      <Card className={props.item.done ? "done item" : "item"}>
        {props.item.text}
        <div>
          <button
            onClick={() => {
              props.onDone(props.item);
            }}
          >
            <DoneImg done={props.item.done}></DoneImg>
          </button>
          <button
            onClick={() => {
              props.onItemDeleted(props.item);
            }}
          >
            <img src="./assets/trash-bin.png" alt="lata de lixo" />
          </button>
        </div>
      </Card>
    </li>
  );
}
