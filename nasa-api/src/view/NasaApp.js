import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getApodPics } from "../api/nasaApi";
import { NasaCard } from "../components/NasaCard";
import Fade from 'react-reveal/Fade';
import { TrailingCursor } from "../components/TrailingCursor";
import { backgroundColor } from "../utils/constants";
import "../style/NasaApp.css"
import { BackgroundParticles } from "../components/BackgroundParticles";
import Particles from "react-tsparticles";

export function NasaApp() {
	const [imageArray, setImageArray] = useState(null);
	const [searchTitle, setSearchTitle] = useState("");

	var currentURL = window.location.href;
	var queryParam = currentURL.split("=").length === 1 ? "star" : currentURL.split("=")[1]

	useEffect(() => {
		getApodPics(queryParam, successCallback, failCallback)
	}, [queryParam]);

	const renderCards = () => {
		return (
			imageArray.map((image) => {
				if(image.links[0].href[31] === "i"){
					return(
						<Grid item xs={12} md={6} lg={4} style={{padding: 20}}>
							<Fade bottom>
								<NasaCard
									key = {image.data[0].nasa_id}
									date = {image.data[0].date_created}
									explanation = {image.data[0].description}
									title = {image.data[0].title}
									url = {image.links[0].href}
									favorite = {image.favorite}
								/>
							</Fade>
						</Grid>
					)
				}
				return null;
			})
		)
    }

	const successCallback = (body) => {
		body.map((image) => {
			image.favorite = false;
			return null;
		});
		setImageArray(body);
    }

    const failCallback = (statusCode) => {
        console.log(statusCode)
    }

	const queryToTitle = (query) => {
		let tempTitle = ""
		let individualWords = [];
		individualWords = query.split("%20");

		tempTitle = individualWords[0][0].toUpperCase();
		tempTitle += individualWords[0].substring(1, individualWords[0].length);
		for (let i=1; i<individualWords.length; i++){
			tempTitle += " " + individualWords[i][0].toUpperCase();
			tempTitle += individualWords[i].substring(1, individualWords[i].length);
		}
		setSearchTitle(tempTitle);
	}

	useEffect(() => {
		queryToTitle(queryParam);
	}, [queryParam]);

	return (
		<>
			<div style={{backgroundColor: backgroundColor, padding: 20}}>
				<TrailingCursor/>
				<BackgroundParticles/>
				{imageArray == null ? null:
					<>
						<h1 style={{color: "white", textAlign: "center"}}>{searchTitle}</h1>
						<Grid
							container
							direction="row"
							justify="space-around"
							alignItems="center"
						>
							{renderCards()}
						</Grid>
					</>
				};
            </div>
		</>
	)
}