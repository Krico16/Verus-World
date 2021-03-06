import { getStrapiURL } from './api';

export function getStrapiMedia(media) {
    
    const imageURL = media.url.startsWith('/') ? getStrapiURL(media.url) : media.url;
    return imageURL;
}

export function getImagefromUrl(url){
    return getStrapiURL(url)
}

export function getStrapiImage(image=""){
    const imageUrl = image.startsWith('/')?getStrapiURL(image):image;
    return imageUrl
}