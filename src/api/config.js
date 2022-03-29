import axios from 'axios';
const baseDomain1 = 'http://127.0.0.1:8000/api'; // API for products
const baseDomain = 'https://dashboard.hithere.co.nz/api'; // API for products
const baseDomain2 = 'https://beta.apinouthemes.com'; // API for products
export const basePostUrl = 'https://beta.apinouthemes.com'; // API for post
export const baseStoreURL = 'https://beta.apinouthemes.com'; // API for vendor(store)
export const socketURL = 'https://dashboard.hithere.co.nz:4000'
export const imageUrl1 = 'http://127.0.0.1:8000/storage/';
export const imageUrl = 'https://dashboard.hithere.co.nz/storage/';

var token;
if(typeof window !== 'undefined' && localStorage){
     token = localStorage.getItem("token");
     token = JSON.parse(token);
     
    if(token){
        token = token.token        
    }
}

export const customHeaders = {
    "Content-Type": "application/json",
    'Accept': "application/json",
    "Access-Control-Allow-Origin": "*",
    'Authorization': "Bearer " +token,
};

export const baseUrl = `${baseDomain1}`;

export default axios.create({
    baseUrl,
    headers: customHeaders,
});

export const serializeQuery = (query) => {
    return Object.keys(query)
        .map(
            (key) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
        )
        .join('&');
};
