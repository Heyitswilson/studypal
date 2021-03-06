const apiKey = require('../../../config/keys').YELP_API_KEY;

const yelp = require('yelp-fusion');
const client = yelp.client(apiKey);


let defaultSearchParams = {
    location: 'San Francisco, CA'
}


// testing out api 
client.search(defaultSearchParams)
    .then(response => {
        console.log(response.jsonBody.businesses)
    }).catch ( error => {
        console.log(e)
    })