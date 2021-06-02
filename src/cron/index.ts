import getData from '../jobs/getData'

class ManagerCron {
    jobs: any;
    constructor(){
        this.jobs = [getData]
    }

    run(){
        this.jobs.forEach(job => job.start())
    }
}

export default new ManagerCron();