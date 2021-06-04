import { app } from './app';

import connection from '../typeorm';
import ManagerCron from '../../../cron'

app.listen(process.env.PORT, async () => {
    console.log(`Server on. Port: ${process.env.PORT}`)
    try {
        await connection();
        console.log('database ok')
        ManagerCron.run()
    } catch(err){
        console.log(err)
    }
    
})
