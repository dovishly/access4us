import {Client} from "@googlemaps/google-maps-services-js";

require('dotenv').config()
const key = process.env.GOOGLE_API_KEY
const client = new Client({});

exports.textSearchPlace = function(req, res) {

    client
    .textSearch({
        params: {
            query: "Domino's",
            region: "Philadelphia, PA",
            location: [39, -75 ],
            key: key,
        },
        timeout: 1000, // milliseconds
    })
    .then((r) => {
        console.log(r.data.results[0].formatted_address);
        res.sendStatus(200);
    })
    .catch((e) => {
        console.log(e.response.data.error_message);
        res.sendStatus(401);
    });

};