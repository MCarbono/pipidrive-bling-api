import 'dotenv/config';
import 'reflect-metadata'

import express from 'express';

const app = express();

app.use(express.json());


export { app }