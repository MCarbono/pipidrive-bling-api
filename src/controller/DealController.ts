import { Request, Response } from 'express';
import { Deal } from "../entities/Deal";
import getConnection from '../shared/infra/typeorm';
import _ from 'lodash';

class DealController {
    async handle(request: Request, response: Response): Promise<Deal[]>{
        const connection = await getConnection()
        
        const deals = await connection.mongoManager.find(Deal)
        
        const groupByDay = _.groupBy(deals, 'date')

        const groupByDayTotalAmount = [];
        for(const [key, value] of Object.entries(groupByDay)){

            const total = value.reduce((acc, { amount }) => {
                acc += amount;
                return acc;
            }, 0)
            
            groupByDayTotalAmount.push({ day: new Date(key).toJSON(), total })
        }

        response.json(groupByDayTotalAmount);
    }
}

export { DealController }