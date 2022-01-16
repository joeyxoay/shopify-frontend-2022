import { nasaURLlibrary } from "../utils/constants";

export async function getApodPics(searchQuery, successCallback, failCallback) {
	await fetch(nasaURLlibrary + searchQuery, {
		method: 'GET',
	})
	.then(res => {
        if(res.status !== 200){
            failCallback(res.status);
        }else{
            res.json()
            .then(jsonRes => {
                successCallback(jsonRes.collection.items);
            })
        }
	})
}