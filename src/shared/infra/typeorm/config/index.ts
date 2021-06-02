import { config } from 'dotenv';

const envFile = `.env${process.env.NODE_ENV}`
const envDir = process.cwd();

config({ path: `${envDir}/${envFile}`})

export const server = {
    port: process.env.PORT,
    env: process.env.NODE_ENV
}

export const dbConnections = {
    mongo: {
        name: 'mongo',
        conn: String(process.env.DATABASE_MONGO_CONN)
    }
}