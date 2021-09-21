import { getStrapiURL } from './api';

export function getStrapiMedia(media) {
    
    const imageURL = media.url.startsWith('/') ? getStrapiURL(media.url) : media.url;
    return imageURL;
}

export function getImagefromUrl(url){
    return getStrapiURL(url)
}