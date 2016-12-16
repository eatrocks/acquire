import express from 'express';
import cors from 'cors';

export const router = express.Router();

const {APP_WEB_BASE_PATH} = process.env;

router.get('/nav', cors(), (req, res) => {
    res.send([
        // {
        //     "href": `${APP_WEB_BASE_PATH}`,
        //     "text": "Home",
        //     "rel": "home"
        // },
        {
            "href": `${APP_WEB_BASE_PATH}/players`,
            "text": "Stocks"
        },
        {
            "href": `${APP_WEB_BASE_PATH}/hotels`,
            "text": "Hotels"
        }
        //, {
        //     "href": `${APP_WEB_BASE_PATH}/demo`,
        //     "text": "Demo"
        // },
        // {
        //     "href": `${APP_WEB_BASE_PATH}/not-found`,
        //     "text": "404"
        // }
    ]);
});

// router.get('/hotels', cors(), (req, res) => {
//     res.send([
//         {
//             "name": "American",
//             "size": "0",
//             "availableShares": "25"
//         },
//         {
//             "name": "Continental",
//             "size": "0",
//             "availableShares": "25"
//         },
//         {
//             "name": "Festival",
//             "size": "0",
//             "availableShares": "25"
//         },
//         {
//             "name": "Imperial",
//             "size": "0",
//             "availableShares": "25"
//         },
//         {
//             "name": "Sackson",
//             "size": "0",
//             "availableShares": "25"
//         },
//         {
//             "name": "Tower",
//             "size": "0",
//             "availableShares": "25"
//         },
//         {
//             "name": "Worldwide",
//             "size": "0",
//             "availableShares": "25"
//         }
//     ])
// })

router.get('/players', cors(), (req, res) => {
    res.send([
        "Bruce",
        "Amber",
        "Elizabeth",
        "Evan",
        "Ean",
        "Ellie"
    ])
})

router.get('/people', cors(), (req, res) => {
    res.send([
        "Jared",
        "Sara",
        "Elijah",
        "Xander",
        "Maxwell",
        "Amelia",
        "Ivy",
        "Jennie",
        "Stephanie",
        "Hillary",
        "Cameron",
        "Carey",
        "Ashlee",
        "Alyssa",
        "Tom",
        "Lynn",
        "Ross",
        "Danette",
        "Claigh",
        "Wendy"
    ]);
});



export default router;
