const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const {getIdea, ideas } = require('./ideas');

app.use(express.json());
app.use(cors());

app.get("/api/v1/ideas", (req, res) => {
    return res.status(200).send(ideas);
})

app.listen(port, () => {
    console.log(`Server is up on port: ${port}`);
})