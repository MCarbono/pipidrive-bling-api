import { app } from './app';

app.listen(process.env.PORT, () => {
    console.log(`Server on. Port: ${process.env.PORT}`)
})
