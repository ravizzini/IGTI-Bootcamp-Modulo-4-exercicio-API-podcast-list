import { db } from '../models/index.js';

const Podcast = db.podcast;

const create = async (req, res) => {
  const podcast = new Podcast({
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    source: req.body.source,
    rss: req.body.rss,
    itunes: req.body.itunes,
    soundcloud: req.body.soundcloud,
    android: req.body.android,
  });

  try {
    const data = await podcast.save(podcast);
    res.send(data);
  } catch (error) {
    res.status(500).send('Erro ao salvar' + error);
  }
};

const findAll = async (req, res) => {
  try {
    const data = await Podcast.find({});
    res.send(data);
  } catch (error) {
    res.status(500).send('Erro ao buscar lista de podcasts' + error);
  }
};

const findOne = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Podcast.findById(id);
    res.send(data);
  } catch (error) {
    res.status(500).send(`Erro ao buscar podcast id: ${id}` + error);
  }
};

const update = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Podcast.findByIdAndUpdate({ _id: id }, req.body);

    if (!data) {
      res.send(`Podcast id ${id} nao encontrado`);
    } else {
      res.send(`Podcast id ${id} atualizado com sucesso!`);
    }
  } catch (error) {
    res.status(500).send(`Erro ao atualizar podcast id: ${id}` + error);
  }
};

const remove = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Podcast.findByIdAndRemove({ _id: id });

    if (!data) {
      res.send(`Podcast id ${id} não encontrado`);
    } else {
      res.status(200).send(`Podcast excluído com sucesso`);
    }
  } catch (error) {
    res.status(500).send(`Erro ao excluir podcast id: ${id}` + error);
  }
};

export default { create, findAll, findOne, update, remove };
