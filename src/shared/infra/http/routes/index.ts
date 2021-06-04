import { Router } from 'express';
import { DealController } from '../../../../controller/DealController';

const routes = Router();

const dealController = new DealController();

routes.get('/deals', dealController.handle)

export { routes}