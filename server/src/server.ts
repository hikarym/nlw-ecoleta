import express, { response } from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes'

const app = express();

app.use(cors()) // () poderia ir dentro () o dominio quando estiver no ar (usar origin)

app.use(express.json());

app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);
