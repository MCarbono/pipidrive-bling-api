import cron from 'node-cron';
import connection from '../shared/infra/typeorm'

import Pipedrive from '../shared/infra/services/pipedrive';
import Bling from '../shared/infra/services/bling';

import { dto } from '../dtos/pipedriveToBlingDTO';
import { Deal } from '../entities/Deal';

import { getMongoManager } from "typeorm";



async function process(){  
    try {
       await connection();
       const manager = getMongoManager('mongodb_connection')
   
       const deals = await Pipedrive.getDeals()
       
       for(const deal of deals){
           try {
               const response = await Bling.createOrder(dto(deal));
               console.log(JSON.stringify(response, null, 4))
   
               const mongoDeal = new Deal(parseFloat(deal.value))
               await manager.save(mongoDeal)
           } catch(err) {
               console.log(err)
           }
       }

   } catch(err){
       console.log(err)
   }
}

export default cron.schedule('* * * * * *', process, {
    scheduled: false
})

