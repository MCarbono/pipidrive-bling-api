import { getRepository, Repository } from "typeorm"
import { Deal } from "../entities/Deal"

class DealRepository {
    private repository: Repository<Deal>

    constructor(){
        this.repository = getRepository(Deal);
    }

    async getAggregate(){
        const aggregate = await this.repository.query(`
            Deals.aggregate([
            { $group: { date: "date", total: { $sum: "$amount"} } }
            ])
        `)

        return aggregate;
    }

    async ok(){
        return 'ok'
    }
}

export { DealRepository }