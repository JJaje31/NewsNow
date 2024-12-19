const express = require('express');
const router = express.Router();
const axios = require('axios')
require('dotenv').config()
const apiKey = process.env.API_KEY;
let search;

router.post('/search',async(req,res) =>{
   search = req.body.results
})

router.get(`/search/api`,async(req,res) => {
    try{
    const response = await axios.get(`https://newsdata.io/api/1/latest?apikey=${apiKey}&country=us&language=en&category=${search}`)
res.json(response.data)} catch(error){
    console.log(error)
}
})




module.exports = router;