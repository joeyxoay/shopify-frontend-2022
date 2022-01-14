import React from "react";

export function NasaCard(props) {
  return (
    <div>
      <p>{props.date}</p>
      <p>{props.explanation}</p>
      <p>{props.title}</p>
      <img alt={props.title} src={props.url}/>
    </div>
  );
}