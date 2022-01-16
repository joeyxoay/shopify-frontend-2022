import React, { useEffect, useState } from "react";
import { CardMedia, Typography } from "@material-ui/core";
import { Grid, IconButton } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ReactCardFlip from 'react-card-flip';
import { likeButtonColor, months } from "../utils/constants";
import "../style/NasaCard.css"
import ShareIcon from '@mui/icons-material/Share';

export function NasaCard(props) {
  const [like, setLike] = useState(false);
  const [date, setDate] = useState("");
  const [flip, setFlip] = useState(props.clicked);

  const likeMechanism = () => {
    like ? setLike(false) : setLike(true);
  }
  const flipMechanism = () => {
    flip ? setFlip(false) : setFlip(true);
  }

  const copyMechanism = () => {
    var website = "";
    if(window.location.href.indexOf("?") !== -1){
      website += window.location.href.split("?")[0];
    }else{
      website += window.location.href;
    }
    website += "?search=" + props.search + "&pic=" + props.id
    navigator.clipboard.writeText(website)
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
    <div style={{textAlign: "center"}}  className="card" id={props.id}>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid style={{width: "80%"}}>
          <Typography className="title" style={{fontWeight: "bolder", fontSize:20}}>
            {props.title}
          </Typography>
        </Grid>
        <Grid>
          <IconButton aria-label="like" onClick={() => likeMechanism()}>
            {like ? 
              <FavoriteIcon sx={{ color: likeButtonColor}}/>
              :
              <FavoriteBorderIcon sx={{ color: likeButtonColor}}/>
            }
          </IconButton>
          <IconButton aria-label="like" onClick={() => copyMechanism()}>
              <ShareIcon sx={{ color: "white"}}/>
          </IconButton>
        </Grid>

      </Grid>
        <ReactCardFlip isFlipped={flip} >
          <div className = "cardFront" style={{height: "100%", backgroundColor: "gray"}} id={"cardFront"}>
            <div className="cardPic" style={{padding: 10, border: '2px solid white', backgroundColor:'white', height: 370, borderRadius: 5}} onClick={() => flipMechanism()}>
              <CardMedia
                component="img"
                height="300"
                image={props.url}
                alt={props.title}
              />
            </div>
          </div>

          <div style={{border: '2px solid white', height: 390, borderRadius: 5}} onClick={() => flipMechanism()}>
            <h5 className="cardBack-h5">{date}</h5>
            <p className="cardBack-p" style={{padding: 10}}>{props.explanation}</p>
          </div>
        </ReactCardFlip>
    </div>
  );
}