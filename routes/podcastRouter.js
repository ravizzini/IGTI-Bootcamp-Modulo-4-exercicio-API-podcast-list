import express from 'express';
import podcastController from '../controller/podcastController.js';

const app = express();

app.post('/podcast/create', podcastController.create);
app.get('/podcast/findAll', podcastController.findAll);
app.get('/podcast/findByID/:id', podcastController.findOne);
app.put('/podcast/update/:id', podcastController.update);
app.delete('/podcast/remove/:id', podcastController.remove);

export { app as podcastRouter };
