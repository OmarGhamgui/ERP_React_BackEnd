import express from 'express';
import { ClientDA } from './DA/ClientDA';
const connectDb = require("./DBConnection");
var cors = require('cors')

import { ClientController } from './controllers/ClientController';
import { ClientRouter } from './routes/ClientRoute';

require('dotenv').config()


connectDb();

const app = express();
const router = express.Router();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', router);


ClientRouter(router, new ClientController(new ClientDA()));


const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Application started successfully on port ${PORT}.`))

