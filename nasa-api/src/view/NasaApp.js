import React, { useEffect, useState } from "react";
import { getApodPics } from "../api/nasaApi";
import { NasaCard } from "../components/NasaCard";

export function NasaApp() {
	const [imageArray, setImageArray] = useState(null);

	useEffect(() => {
		getApodPics(successCallback, failCallback)
	}, []);

	const renderCards = () => {
		return (
			imageArray.map((image) => {
				if(image.media_type === "image"){
					return(
						<NasaCard
							key = {image.url}
							date = {image.date}
							explanation = {image.explanation}
							title = {image.title}
							url = {image.url}
						/>
					)
				}
				return null;
			})
		)
    }

	const successCallback = (body) => {
		setImageArray(body);
    }

    const failCallback = (statusCode) => {
        console.log(statusCode)
    }

	return (
		<>
			<div>
				{imageArray !== null ? renderCards(): null};
            </div>
		</>
	)
}