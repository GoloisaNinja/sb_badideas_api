const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const {getIdea, ideas, exhaustiveSearch } = require('./ideas');

app.use(express.json());
app.use(cors());

app.get("/api/v1/ideas", (req, res) => {
    const selectedIdeas = ideas.slice(0, 5);
    return res.status(200).send(selectedIdeas);
})
app.get("/api/v1/ideas/all", (req, res) => {
    return res.status(200).send(ideas);
})

app.get("/api/v1/ideas/search", (req, res) => {
    const searchString = req.query.query;
    const searchResults = exhaustiveSearch(searchString);
    res.status(200).send(searchResults);
})

app.listen(port, () => {
    console.log(`Server is up on port: ${port}`);
})