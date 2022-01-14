import { apiKey, imageCount, nasaURL } from "../utils/constants";

export async function getApodPics(successCallback, failCallback) {
	await fetch(nasaURL + "?count=" + imageCount + "&api_key=" + apiKey, {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		}
	})
	.then(res => {
        if(res.status !== 200){
            failCallback(res.status);
        }else{
            res.json()
            .then(jsonRes => {
                successCallback(jsonRes);
            })
        }
	})
	.catch(error => console.log(error));
}