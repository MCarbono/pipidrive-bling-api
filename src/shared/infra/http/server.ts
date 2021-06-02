import { app } from './app';

import ManagerCron from '../../../cron'

app.listen(process.env.PORT, () => {
    console.log(`Server on. Port: ${process.env.PORT}`)
    //ManagerCron.run()
})
