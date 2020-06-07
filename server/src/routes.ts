import express from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import PointsController from './controllers/PointsController';
import ItemsControler from './controllers/ItemsController';

// Serve para desacoplar as rotas do arquivo server para este arquivo
const routes = express.Router();
const upload = multer(multerConfig);


const pointsController = new PointsController();
const itemsControler = new ItemsControler();

routes.get('/items', itemsControler.index);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

routes.post('/points', upload.single('image'), pointsController.create);


export default routes;
