const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();
app.use(cors());
app.use(express.json());