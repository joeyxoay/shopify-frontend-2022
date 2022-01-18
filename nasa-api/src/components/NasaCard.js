import React, { useEffect, useState } from "react";
import { CardMedia } from "@material-ui/core";
import { Grid, IconButton } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ReactCardFlip from 'react-card-flip';
import { buttonColor, clickedButtonColor, likeButtonColor, months } from "../utils/constants";
import "../style/NasaCard.css"
import ShareIcon from '@mui/icons-material/Share';

export function NasaCard(props) {
  const [like, setLike] = useState(props.likedArray.includes(props.id));
  const [date, setDate] = useState("");
  const [flip, setFlip] = useState(props.clicked);
  const [share, setShare] = useState(false);

  const likeMechanism = () => {
    if(like){
      removeFromArray(props.likedArray, props.id)
      setLike(false)
    }else{
      props.likedArray.push(props.id)
      setLike(true);
    }
    updateLocalStorage(props.likedArray);
  }

  function updateLocalStorage(array){
    localStorage.setItem("likedPics", array.join());
  }

  function removeFromArray(array, id){
    const index = array.indexOf(id);
    if(index > -1) {
      array.splice(index, 1);
    }
  }

  const flipMechanism = () => {
    flip ? setFlip(false) : setFlip(true);
  }

  const copyMechanism = () => {
    setShare(true);
    var website = "";
    if(window.location.href.indexOf("?") !== -1){
      website += window.location.href.split("?")[0];
    }else{
      website += window.location.href;
    }
    website += "?search=" + props.search + "&pic=" + props.id
    navigator.clipboard.writeText(website)
    setTimeout(() => {
      setShare(false);
   }, 200)
  }

  useEffect(() => {
    const dateFormatter = (rawDate) => {
      var tempDate = "";
      tempDate += months[parseInt(rawDate.substring(5,7)-1)];
      tempDate += " " + rawDate.substring(8,10) + " " + rawDate.substring(0,4);
      setDate(tempDate);
    }

		dateFormatter(props.date);
	}, [props.date]);

  return (
    <div className="WholeCard" id={props.id}>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid style={{width: "80%"}}>
          <h1> {props.title}</h1>
        </Grid>
        <Grid>
          
          <IconButton onClick={() => likeMechanism()}>
            <ReactCardFlip isFlipped={like}>
                <FavoriteBorderIcon sx={{ color: likeButtonColor}}/>
                <FavoriteIcon sx={{ color: likeButtonColor}}/>
            </ReactCardFlip>
          </IconButton>

          <IconButton onClick={() => copyMechanism()}>
            {share ? 
              <ShareIcon sx={{ color: clickedButtonColor}}/>
              :
              <ShareIcon sx={{ color: buttonColor}}/>
            }
          </IconButton>

        </Grid>
      </Grid>

      <div className="Card" onClick={() => flipMechanism()}>
        <ReactCardFlip isFlipped={flip} >
          <div className = "CardFront" >
            <div className="CardPic" >
              <CardMedia
                component="img"
                height="300"
                image={props.url}
                alt={props.title}
              />
            </div>
          </div>

          <div className="CardBack">
            <h5>{date}</h5>
            <p>{props.explanation}</p>
          </div>
        </ReactCardFlip>
      </div>
        
    </div>
  );
}