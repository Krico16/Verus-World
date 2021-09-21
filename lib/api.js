export function getStrapiURL(path = "") {
    return `${process.env.STRAPI_API || 'http://localhost:1337'}${path}`;
}

export async function fetchAPI(path) {
    const requestURL = getStrapiURL(path);
    const response = await fetch(requestURL);
    const data = await response.json();
    return data;
}