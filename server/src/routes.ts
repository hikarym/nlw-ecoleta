import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsControler from './controllers/ItemsController';

// Serve para desacoplar as rotas do arquivo server para este arquivo
const routes = express.Router();

const pointsController = new PointsController();
const itemsControler = new ItemsControler();

routes.get('/items', itemsControler.index);

routes.post('/points', pointsController.create);

routes.get('/points', pointsController.index);

routes.get('/points/:id', pointsController.show);


export default routes;
