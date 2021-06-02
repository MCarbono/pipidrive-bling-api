import 'dotenv/config';
import 'reflect-metadata'
import connection from '../typeorm';

import express from 'express';

const app = express();

app.use(express.json());

connection.then(() => {
    console.log('Database connected')
})

export { app }