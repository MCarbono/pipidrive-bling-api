import { Router } from 'express';

const routes = Router();

routes.post('/deal', createDealController.handle);

export { routes}