const axios = require('axios');
const router = require('express').Router();

router.route('/title/:searchName')
    .get((req, res) => {
        
        axios.get(`https://imdb-api.com/en/API/Search/${process.env.REACT_APP_IMDB}/${req.params.searchName}`)
        .then((response) => {
            res.json(response.data);
        })
        .catch((err) => {
            console.log('backend axios error getting title');
            res.status(err.response.status).send(err.response.statusText);
        });
    });

    router.route('/detail/:id')
    .get((req, res) => {
        
        axios.get(`https://imdb-api.com/en/API/Title/${process.env.REACT_APP_IMDB}/${req.params.id}`)
        .then((response) => {
            res.json(response.data);
        })
        .catch((err) => {
            console.log('backend axios error getting title detail');
            res.status(err.response.status).send(err.response.statusText);
        });
    });

module.exports = router;
