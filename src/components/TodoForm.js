import React, { useState } from "react";

export default function TodoForm(props) {
  const [text, setText] = useState("");

  function handleChange(event) {
    let t = event.target.value;
    setText(t);
  }

  function addItem(event) {
    event.preventDefault(); /* faz com que o button não envie o form pro backend */
    if (text) {
      //     setItems([
      // ...items,
      //   text,
      //   ]); /* Preciso fazer um array aqui pra poder incluir nos itens, o "...items é pra pegar os já adicionados" */
      props.onAddItem(text);
      setText("");
    }
  }

  return (
    <form>
      <input onChange={handleChange} type="text" value={text}></input>
      <button onClick={addItem}>Add</button>
    </form>
  );
}
