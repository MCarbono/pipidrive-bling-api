import { createConnections } from 'typeorm';

import { dbConnections, server } from './config/index';

const connection = createConnections([
    {
        name: dbConnections.mongo.name,
        type: 'mongodb',
        url: dbConnections.mongo.conn,
        username: "root",
        password: "root",
        entities: [],
        useNewUrlParser: true,
        useUnifiedTopology: true,
        synchronize: server.env === 'dev',
    }
]);

export default connection;