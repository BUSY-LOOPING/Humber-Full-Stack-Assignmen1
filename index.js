import "dotenv/config"; //es6 syntax to loada env file and make the loaded variables available throughout the app
import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import path from 'path';
import { connect } from "./db.js";
import adminPageRouter from './modules/admin/router.js';
import pageRouter from './modules/public/router.js';
import apiRouter from './modules/api/router.js';
import cors from 'cors';


connect();

const __dirname = import.meta.dirname;
console.log(`DIRECTORY = ${__dirname}`);

const app = express();
const port = process.env.PORT || '8888';

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json()); // For parsing JSON bodies
app.use(cors());         // Enable CORS for all routes
app.use(express.urlencoded());

app.use('/admin', adminPageRouter);
app.use('/api', apiRouter);
app.use("/", pageRouter);
 
app.listen(port, ()=> {
    console.log(`Server started at http://localhost:${port}`);
});