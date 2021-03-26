import express from 'express';
import { ClientDA } from './DA/ClientDA';
const connectDb = require("./DBConnection");
var cors = require('cors')

import { ArticleController, ClientController,SupplierController } from './controllers';
import { ClientRouter,SupplierRouter } from './routes';
import { SupplierDA } from './DA/SupplierDA';
import { ArticleRouter } from './routes/ArticleRoute';
import { ArticleDA } from './DA/ArticleDA';

require('dotenv').config()


connectDb();

const app = express();
const router = express.Router();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', router);


ClientRouter(router, new ClientController(new ClientDA()));
SupplierRouter(router, new SupplierController(new SupplierDA()));
ArticleRouter(router, new ArticleController(new ArticleDA()));




const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Application started successfully on port ${PORT}.`))

