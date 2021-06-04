import axios from 'axios';
import config from '../../../config';

import querystring from 'querystring';

class Bling {
    private service;
    private apiKey;
    constructor(){
        this.service = axios.create({
            baseURL: config.bling.baseUrl
        })
        this.apiKey = config.bling.apiKey
    }

    async createOrder(order) {
        const payload = {
            apikey: this.apiKey,
            xml: order
        }
        
        const { data: response } = await this.service.post(
            '/pedido/json', 
            querystring.stringify(payload), 
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            }
        )
     
        if(response.retorno.erros?.length){
            throw new Error(response.retorno.erros.map(e => e.erro.msg).join(' | '))
        }
        
        return response.retorno.pedidos[0].pedido;
    }
}

export default new Bling();
