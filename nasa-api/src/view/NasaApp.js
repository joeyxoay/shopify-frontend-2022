import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getApodPics } from "../api/nasaApi";
import { NasaCard } from "../components/NasaCard";

export function NasaApp() {
	const [imageArray, setImageArray] = useState(null);

	var currentURL = window.location.href;
	var queryParam = currentURL.split("=").length == 1 ? "star" : currentURL.split("=")[1]

	useEffect(() => {
		getApodPics(queryParam, successCallback, failCallback)
	}, []);

	const renderCards = () => {
		return (
			imageArray.map((image) => {
				if(image.links[0].href[31] === "i"){
					return(
						<NasaCard
							key = {image.data[0].nasa_id}
							date = {image.data[0].date_created}
							explanation = {image.data[0].description}
							title = {image.data[0].title}
							url = {image.links[0].href}
							favorite = {image.favorite}
						/>
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

	return (
		<>
			<div>
				{imageArray == null ? null:
					<Grid
						container
						direction="row"
						justify="space-around"
						alignItems="center"
					>
						<Grid>
							{renderCards()}
						</Grid>
					</Grid>
				};
            </div>
		</>
	)
}