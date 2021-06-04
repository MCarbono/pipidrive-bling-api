export default {
    pipedrive: {
        baseUrl: process.env.PIPEDRIVE_URL,
        apiToken: process.env.PIPEDRIVE_API_TOKEN
    },

    bling: {
        baseUrl: process.env.BLING_URL,
        apiKey: process.env.BLING_API_KEY
    },

    database: {
        host: process.env.MONGODB_HOST,
        username: process.env.MONGODB_USERNAME,
        password: process.env.MONGODB_PASSWORD,
        port: process.env.MONGODB_PORT,
        database: process.env.MONGODB_DATABASE
    }
}
