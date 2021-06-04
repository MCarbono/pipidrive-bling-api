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
        url: process.env.MONGODB_URL,
        username: process.env.MONGODB_USERNAME,
        password: process.env.MONGODB_PASSWORD,
    }

}
