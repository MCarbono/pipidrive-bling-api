import { Request, Response } from 'express';
import { Deal } from "../entities/Deal";
import getConnection from '../shared/infra/typeorm';

class DealController {
    async handle(request: Request, response: Response): Promise<Deal[]>{
        const connection = await getConnection()

        const teste = await connection.mongoManager.find(Deal)
        
        /**
         *  $group: {
                _id: "$date",
                total: {$sum: "$amount"},
                count: {$sum: 1},
            }
         * */

        return response.json(teste);
    }
}

export { DealController }