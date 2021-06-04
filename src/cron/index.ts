import processDeals from '../jobs/processDeals'

class ManagerCron {
    jobs: any;
    constructor(){
        this.jobs = [processDeals]
    }

    run(){
        this.jobs.forEach(job => job.start())
    }
}

export default new ManagerCron();