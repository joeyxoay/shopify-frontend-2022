import React, { useEffect, useState } from "react";
import { CardContent, CardMedia, Typography } from "@material-ui/core";
import { Grid, IconButton, Paper } from "@mui/material";
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ReactCardFlip from 'react-card-flip';
import { months } from "../utils/constants";
import styles from "../style/NasaCard.module.css"


export function NasaCard(props) {
  const [like, setLike] = useState(false);
  const [date, setDate] = useState("");
  const [flip, setFlip] = useState(false);

  const likeMechanism = () => {
    like ? setLike(false) : setLike(true);
  }
  const flipMechanism = () => {
    flip ? setFlip(false) : setFlip(true);
  }

  const dateFormatter = (rawDate) => {
    var tempDate = "";
    tempDate += months[parseInt(rawDate.substring(5,7))];
    tempDate += " " + rawDate.substring(8,10) + " " + rawDate.substring(0,4);
    setDate(tempDate);
  }

  useEffect(() => {
		dateFormatter(props.date);
	}, []);

  return (
    <>
    <div style={{textAlign: "center", margin: 20}}>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid style={{width: "80%"}}>
          <Typography className={styles.title} style={{fontWeight: "bolder"}}>
            {props.title}
          </Typography>
        </Grid>
        <Grid>
          <IconButton aria-label="like" onClick={() => likeMechanism()}>
            {like ? 
              <FavoriteIcon
                sx={{ color: "red"}}
              />
              :
              <FavoriteBorderIcon
              sx={{ color: "red"}}
              />
            }
          </IconButton>
        </Grid>
        

      </Grid>
      {/* <Paper onClick={() => flipMechanism()} style={{background: "20"}}> */}
        <ReactCardFlip isFlipped={flip} containerStyle={{width: "100%"}}>
          <div style={{padding: 10, border: '2px solid white', backgroundColor:'white', height: 370}} onClick={() => flipMechanism()}>
            {/* <Typography className={styles.title}>
              {props.title}
            </Typography> */}
            <CardMedia
              component="img"
              height="300"
              image={props.url}
              alt={props.title}
            />
            
            {/* <button onClick={() => flipMechanism()}>flip</button> */}
          </div>

          <div className={styles.cardBack} style={{border: '2px solid white', height: 390}} onClick={() => flipMechanism()}>
            {/* <Typography variant="h5" color="text.secondary"> */}
            {/* <p>
              {props.title}
            </p> */}
            {/* </Typography> */}
            <h5>
              {date}
            </h5>
            <p style={{padding: 10}}>{props.explanation}</p>
              
            
            {/* <button onClick={() => flipMechanism()}>flip</button> */}
          </div>

        </ReactCardFlip>

      {/* </Paper> */}
      

    </div>
    
    
    </>
  );
}