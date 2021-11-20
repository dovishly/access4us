import {Client} from "@googlemaps/google-maps-services-js";
import Place from "../tempClasses/place";

require('dotenv').config()
const key = process.env.GOOGLE_API_KEY
const client = new Client({});

let mockDB = new Map()

exports.textSearchPlace = function(req, res) {

    let searchTerm: string = req.query.searchTerm;

    client
    .textSearch({
        params: {
            query: searchTerm,
            key: key,
        },
        timeout: 1000, // milliseconds
    })
    .then((r) => {
        r.data.results.forEach(value => {
            console.log(value.name)
            console.log(value.place_id)
        })
        res.sendStatus(200);
    })
    .catch((e) => {
        console.log(e.response.data.error_message);
        res.sendStatus(404);
    });

};

exports.likeAPlace = function(req, res) {
    let placeId: string = req.query.placeid;
    if (!mockDB.has(placeId)) {
        mockDB.set(placeId, 1);
    } else {
        mockDB.set(placeId, mockDB.get(placeId) + 1);
    }
    console.log(mockDB.get(placeId));
    res.sendStatus(200);
}

exports.createATag = function(req, res) {
    let placeId: string = req.query.placeid;
    let tag: string = req.query.tag
    let placeObj = new Place(placeId, tag);

    console.log(placeObj.addTag(tag));

    res.sendStatus(200);
}