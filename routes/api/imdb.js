const axios = require('axios');
const router = require('express').Router();

router.route('/title/:searchName')
    .get((req, res) => {
        axios.get(`https://imdb-api.com/en/API/Search/k_12345678/${req.params.searchName}`)
        .then((response) => {
            res.json(response.data.data);
        })
        .catch((err) => {
            console.log('backend axios error getting title');
            res.status(err.response.status).send(err.response.statusText);
        });
    });

module.exports = router;
