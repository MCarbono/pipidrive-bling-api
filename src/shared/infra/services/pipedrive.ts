import axios from 'axios';
import config from '../../../config';

import dayjs from 'dayjs';

class Pipedrive {
    private service;

    constructor(){
        this.service = axios.create({
            baseURL: config.pipedrive.baseUrl
        })

        this.service.interceptors.request.use(c => {
            c.params = {
                ...c.params,
                api_token: config.pipedrive.apiToken
            }
            
            return c;
        });
    }

    async getDeals(): Promise<any[]>{
        const date = dayjs().format();
        
        try {
            const response = await this.service.get(`/deals`, {
                params: {
                    status: 'won',
                    start_date: date
                }
            });
    
            return response.data.data;

        } catch(err){
            return [];
        }
    }
}

export default new Pipedrive();
