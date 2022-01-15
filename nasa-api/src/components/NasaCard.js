import React, { useEffect, useState } from "react";
import { CardContent, CardMedia, Typography } from "@material-ui/core";
import { IconButton } from "@mui/material";
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ReactCardFlip from 'react-card-flip';
import { months } from "../utils/constants";

export function NasaCard(props) {
  const [like, setLike] = useState(false);
  const [date, setDate] = useState("");
  

  const likeMechanism = () => {
    like ? setLike(false) : setLike(true);
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
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image={props.url}
        alt={props.title}
      />
      <CardContent>
        <Typography variant="h5" color="text.secondary">
          {props.title}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.explanation}
        </Typography>
      </CardContent>
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
    </Card>
    </>
    // <div>
    //   <p>{props.date}</p>
    //   <p>{props.explanation}</p>
    //   <p>{props.title}</p>
    //   {like ? 
    //     <p>liked</p>:
    //     <p>not liked</p>
    //   }
    //   <button onClick={() => likeMechanism()}>like</button>
    //   <img alt={props.title} src={props.url}/>
    // </div>
  );
}