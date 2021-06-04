import cron from 'node-cron';
import connection from '../shared/infra/typeorm'

import Pipedrive from '../shared/infra/services/pipedrive';
import Bling from '../shared/infra/services/bling';

import { dto } from '../dtos/pipedriveToBlingDTO';
import { Deal } from '../entities/Deal';

import { Connection } from 'typeorm';

async function process(){  
    try {
       const conn: Connection = await connection();

       const deals = await Pipedrive.getDeals()
       
       for(const deal of deals){
           try {
               const response = await Bling.createOrder(dto(deal));
               console.log(JSON.stringify(response, null, 4))
   
               const mongoDeal = new Deal(parseFloat(deal.value))
               await conn.mongoManager.save(mongoDeal)
           } catch(err) {
               console.log(err)
           }
       }

   } catch(err){
       console.log(err)
   }
}

export default cron.schedule('*/1 * * * *', process, {
    scheduled: false
})

