import cron from 'node-cron';

function getData(){
    console.log('Data')
}

export default cron.schedule('*/1 * * * *', getData, {
    scheduled: false
})

