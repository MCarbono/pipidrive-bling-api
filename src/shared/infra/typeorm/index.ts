import { createConnection, getConnectionManager } from 'typeorm';
import { Deal } from '../../../entities/Deal';

import config from '../../../config';

const connectionManager = getConnectionManager();

async function getConnection(){
    const name = "mongodb_connection";

    if (connectionManager.has(name)) {
        const connection = connectionManager.get(name);

        if (!connection.isConnected) {
            await connection.connect();
        }
           
        return connection;
      }

    const connection = await createConnection(
        {
            name,
            type: 'mongodb',
            host: config.database.host,
            username: config.database.username,
            password: config.database.password,
            port: Number(config.database.port),
            database: config.database.database,
            entities: [Deal],
            useNewUrlParser: true,
            useUnifiedTopology: true,
            authSource: "admin"
        }
    );
    return connection
}

export default getConnection;