export function getStrapiURL(path = "") {
    return `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${path}`;
}

export async function fetchAPI(path) {
    const requestURL = getStrapiURL(path);
    const response = await fetch(requestURL);
    const data = await response.json();
    return data;
}