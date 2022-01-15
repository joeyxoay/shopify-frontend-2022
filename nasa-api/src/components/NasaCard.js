import React from "react";


export function NasaCard(props) {
  // const [like, setLike] = useState(null);
  // const likeMechanism = () => {

  // }

  return (
    <div>
      <p>{props.date}</p>
      <p>{props.explanation}</p>
      <p>{props.title}</p>
      {props.favorite ? 
        <p>liked</p>:
        <p>not liked</p>
      }
      {/* <button onClick={}>like</button> */}
      <img alt={props.title} src={props.url}/>
    </div>
  );
}