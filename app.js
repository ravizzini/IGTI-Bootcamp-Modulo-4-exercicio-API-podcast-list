import express from 'express';

import { podcastRouter } from './routes/podcastRouter.js';

import { db } from './models/index.js';

(async () => {
  try {
    await db.mongoose.connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado ao Banco com sucesso');
  } catch (error) {
    console.log('Erro ao conectar no MongoDB');
  }
})();

const app = express();

app.use(express.json());
app.use(podcastRouter);

app.get('/', (req, res) => {
  res.send('API em execução');
});

app.listen(process.env.APP_PORT, () => {
  console.log('Servidor em execução na porta 3000');
});
