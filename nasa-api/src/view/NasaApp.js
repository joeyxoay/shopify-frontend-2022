import React, { useEffect, useState } from "react";
import { Grid, IconButton } from "@mui/material";
import { getApodPics } from "../api/nasaApi";
import { NasaCard } from "../components/NasaCard";
import Fade from 'react-reveal/Fade';
import { TrailingCursor } from "../components/TrailingCursor";
import { backgroundColor, paths } from "../utils/constants";
import { BackgroundParticles } from "../components/BackgroundParticles";
import { DateSelector } from "../components/DateSelecter";
import "../style/NasaApp.css";
import "react-datepicker/dist/react-datepicker.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export function NasaApp() {
	const [imageArray, setImageArray] = useState(null);
	const [searchTitle, setSearchTitle] = useState("");
	const [enableStart, setEnableStart] = useState(false);
	const [enableEnd, setEnableEnd] = useState(false);
	const [startDate, setStartDate] = useState(new Date("2000-01-01 00:00:00"));
	const [endDate, setEndDate] = useState(new Date());
	const [queryParam, setQueryParam] = useState("");
	const [queryPic, setQueryPic] = useState("");

	var currentURL = window.location.href;

	const renderCards = () => {
		return (
			imageArray.map((image) => {
				if(image.links != null && image.links[0].href[31] === "i"){
					if(!enableStart || Date.parse(image.data[0].date_created) >= Date.parse(startDate.toString())){
						if(!enableEnd || Date.parse(image.data[0].date_created) <= Date.parse(endDate.toString())){
							return(
								<Grid item xs={12} md={6} lg={4} style={{padding: 20}}>
									<Fade bottom>
										<NasaCard
											key = {image.data[0].nasa_id}
											id = {image.data[0].nasa_id}
											date = {image.data[0].date_created}
											explanation = {image.data[0].description}
											title = {image.data[0].title}
											url = {image.links[0].href}
											favorite = {image.favorite}
											search = {queryParam}
											clicked = {queryPic.length !== 0 && queryPic === image.data[0].nasa_id}
										/>
									</Fade>
								</Grid>
							)
						}
					}
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
		queryToTitle(queryParam);
		if(queryPic.length !== 0){
			scrollToPic();
		}
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

	const scrollToPic = () => {
		document.getElementById(queryPic).scrollIntoView({
			behavior: 'smooth'
		});
	}

	useEffect(() => {
		const grabbingQuery = () => {
			if(currentURL.indexOf("?search=") !== -1){
				if(currentURL.indexOf("&") === -1){
					setQueryParam(currentURL.split("=")[1]);
				}else{
					setQueryParam(currentURL.substring(currentURL.indexOf("=")+1, currentURL.indexOf("&")));
					setQueryPic(currentURL.split("pic=")[1]);
				}
			}else{
				setQueryParam("star");
			}
		}
		grabbingQuery();
		getApodPics(queryParam, successCallback, failCallback);
	}, [queryParam]);

	return (
		<div style={{backgroundColor: backgroundColor, padding: 20}}>
			<TrailingCursor/>
			<BackgroundParticles/>
			{imageArray == null ? 
				<div style={{minHeight: "100vh"}}>
					<h1 style={{color: "white", textAlign: "center"}}>{searchTitle}</h1>
				</div>
			:
				<div style={{minHeight: "100vh"}}>
					<Grid
						container
						direction="row"
						justifyContent="space-between"
						alignItems="center"
					>
						<Grid item xs={12} md={4} lg={4}>
						<IconButton aria-label="like" onClick={() => window.location.href = paths.HOME}>
							<ArrowBackIcon sx={{ color: "white"}}/>
						</IconButton>
						</Grid>
						<Grid item xs={12} md={4} lg={4}>
							<h1 style={{color: "white", textAlign: "center"}}>{searchTitle}</h1>
						</Grid>
						<Grid container xs={12} md={4} lg={4}>
							<DateSelector
								date = {startDate}
								setDate = {setStartDate}
								title = {"Starting Date"}
								enable = {enableStart}
								setEnable = {setEnableStart}
							/>
							<DateSelector
								date = {endDate}
								setDate = {setEndDate}
								title = {"End Date"}
								enable = {enableEnd}
								setEnable = {setEnableEnd}
							/>
						</Grid>
					</Grid>
					
					<Grid
						container
						direction="row"
						justify="space-around"
						alignItems="center"
					>
						{renderCards()}
					</Grid>
				</div>
			};
		</div>
	)
}