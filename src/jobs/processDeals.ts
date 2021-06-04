import cron from 'node-cron';

import Pipedrive from '../shared/infra/services/pipedrive';
import Bling from '../shared/infra/services/bling';

import {dto} from '../dtos/pipedriveToBlingDTO'

async function process(){  
    const deals = await Pipedrive.getDeals()
    
    for(const deal of deals){
        try {
            const response = await Bling.createOrder(dto(deal));
            console.log(JSON.stringify(response, null, 4))
        } catch(err) {
            console.log(err)
        }
    }
}

export default cron.schedule('* * * * * *', process, {
    scheduled: false
})

