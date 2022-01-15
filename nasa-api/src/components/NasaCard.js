import React, { useState } from "react";


export function NasaCard(props) {
  const [like, setLike] = useState(false);
  const likeMechanism = () => {
    like ? setLike(false) : setLike(true);
  }

  return (
    <div>
      <p>{props.date}</p>
      <p>{props.explanation}</p>
      <p>{props.title}</p>
      {like ? 
        <p>liked</p>:
        <p>not liked</p>
      }
      <button onClick={() => likeMechanism()}>like</button>
      <img alt={props.title} src={props.url}/>
    </div>
  );
}